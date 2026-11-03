import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaPlus,
  FaTrash,
  FaSave,
  FaLock,
  FaSignOutAlt,
  FaEdit,
  FaTimes,
  FaSyncAlt,
} from "react-icons/fa";
import {
  adminListFlashNews,
  adminCreateFlashNews,
  adminUpdateFlashNews,
  adminDeleteFlashNews,
} from "../api/client";

const KEY_STORAGE = "alertngo_admin_key";

export default function AdminFlashNews() {
  const [adminKey, setAdminKey] = useState(() => sessionStorage.getItem(KEY_STORAGE) || "");
  const [keyInput, setKeyInput] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const [message, setMessage] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({ message: "", sort_order: 0, is_active: 1 });

  const clearMessages = () => {
    setError("");
    setNotice("");
  };

  const load = useCallback(async (key) => {
    if (!key) return;
    setLoading(true);
    setError("");
    try {
      const res = await adminListFlashNews(key);
      setItems(res.data || []);
    } catch (err) {
      setError(err.message);
      if (err.status === 401) {
        sessionStorage.removeItem(KEY_STORAGE);
        setAdminKey("");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (adminKey) load(adminKey);
  }, [adminKey, load]);

  const handleLogin = (e) => {
    e.preventDefault();
    const key = keyInput.trim();
    if (!key) {
      setError("Enter the admin key.");
      return;
    }
    sessionStorage.setItem(KEY_STORAGE, key);
    setKeyInput("");
    setError("");
    setAdminKey(key);
  };

  const logout = () => {
    sessionStorage.removeItem(KEY_STORAGE);
    setAdminKey("");
    setItems([]);
    setEditingId(null);
    clearMessages();
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const text = message.trim();
    if (!text) {
      setError("Write the announcement text first.");
      return;
    }
    setSaving(true);
    clearMessages();
    try {
      await adminCreateFlashNews(adminKey, {
        message: text,
        is_active: isActive ? 1 : 0,
        sort_order: Number(sortOrder) || 0,
      });
      setMessage("");
      setSortOrder(0);
      setIsActive(true);
      setNotice("Announcement added. It is live on the top bar.");
      await load(adminKey);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setDraft({
      message: item.message,
      sort_order: item.sort_order,
      is_active: Number(item.is_active) ? 1 : 0,
    });
    clearMessages();
  };

  const saveEdit = async (id) => {
    const text = draft.message.trim();
    if (!text) {
      setError("Message cannot be empty.");
      return;
    }
    setSaving(true);
    clearMessages();
    try {
      await adminUpdateFlashNews(adminKey, {
        id,
        message: text,
        sort_order: Number(draft.sort_order) || 0,
        is_active: draft.is_active ? 1 : 0,
      });
      setEditingId(null);
      setNotice("Announcement updated.");
      await load(adminKey);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = async (item) => {
    clearMessages();
    try {
      await adminUpdateFlashNews(adminKey, {
        id: item.id,
        is_active: Number(item.is_active) ? 0 : 1,
      });
      await load(adminKey);
    } catch (err) {
      setError(err.message);
    }
  };

  const remove = async (item) => {
    if (!window.confirm("Delete this announcement?")) return;
    clearMessages();
    try {
      await adminDeleteFlashNews(adminKey, item.id);
      setNotice("Announcement deleted.");
      await load(adminKey);
    } catch (err) {
      setError(err.message);
    }
  };

  const activeCount = useMemo(
    () => items.filter((item) => Number(item.is_active)).length,
    [items]
  );

  if (!adminKey) {
    return (
      <div className="admin-page">
        <div className="container admin-shell">
          <div className="admin-login">
            <div className="admin-card">
              <h1 className="admin-login-title">Admin access</h1>
              <p className="admin-login-sub">
                Enter the admin key to manage the scrolling announcements in the site header.
              </p>
              {error && <div className="admin-msg admin-msg-error">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label className="form-label" htmlFor="admin-key">Admin key</label>
                  <input
                    id="admin-key"
                    type="password"
                    className="form-input"
                    value={keyInput}
                    onChange={(e) => setKeyInput(e.target.value)}
                    placeholder="ADMIN_KEY from backend/.env"
                    autoFocus
                  />
                </div>
                <button
                  className="btn-primary"
                  type="submit"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <FaLock size={12} /> Unlock admin panel
                </button>
              </form>
              <p className="admin-hint">
                The key is defined as <code>ADMIN_KEY</code> in <code>backend/.env</code>. Change it there
                before sharing the site.
              </p>
              <Link to="/" className="admin-back-link">&#8592; Back to website</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="container admin-shell">
        <div className="admin-header">
          <div>
            <h1>Flash News Manager</h1>
            <p>
              These messages scroll across the green bar at the top of every page.
              {" "}{activeCount} of {items.length} active.
            </p>
          </div>
          <div className="admin-actions">
            <button className="admin-btn admin-btn-ghost" onClick={() => load(adminKey)} disabled={loading}>
              <FaSyncAlt size={10} /> Refresh
            </button>
            <button className="admin-btn admin-btn-ghost" onClick={logout}>
              <FaSignOutAlt size={10} /> Lock
            </button>
          </div>
        </div>

        {error && <div className="admin-msg admin-msg-error">{error}</div>}
        {notice && <div className="admin-msg admin-msg-ok">{notice}</div>}

        <div className="admin-card">
          <h2><FaPlus size={12} /> Add announcement</h2>
          <form onSubmit={handleAdd}>
            <div className="form-group">
              <label className="form-label" htmlFor="flash-message">Message (max 500 characters)</label>
              <textarea
                id="flash-message"
                className="form-textarea admin-textarea"
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Gram Sabha training on 12 Nov at Chintoor — all mandal coordinators attend."
              />
            </div>
            <div className="admin-row">
              <div className="form-group admin-order-group">
                <label className="form-label" htmlFor="flash-order">Order</label>
                <input
                  id="flash-order"
                  type="number"
                  className="form-input"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                />
              </div>
              <label className="admin-toggle admin-toggle-add">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                /> Visible on site
              </label>
              <button
                className="admin-btn admin-btn-primary admin-add-btn"
                type="submit"
                disabled={saving}
              >
                <FaPlus size={10} /> {saving ? "Saving..." : "Add announcement"}
              </button>
            </div>
          </form>
        </div>

        <div className="admin-card">
          <h2><FaBolt size={12} /> Announcements ({items.length})</h2>
          {loading ? (
            <div className="admin-empty">Loading...</div>
          ) : items.length === 0 ? (
            <div className="admin-empty">No announcements yet. Add the first one above.</div>
          ) : (
            <div className="admin-list">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`admin-item ${Number(item.is_active) ? "" : "is-off"}`}
                >
                  {editingId === item.id ? (
                    <>
                      <textarea
                        className="form-textarea admin-textarea"
                        maxLength={500}
                        value={draft.message}
                        onChange={(e) => setDraft({ ...draft, message: e.target.value })}
                      />
                      <div className="admin-row admin-edit-row">
                        <label className="admin-toggle">
                          <input
                            type="checkbox"
                            checked={!!draft.is_active}
                            onChange={(e) => setDraft({ ...draft, is_active: e.target.checked ? 1 : 0 })}
                          /> Visible
                        </label>
                        <label className="admin-toggle">
                          Order
                          <input
                            type="number"
                            className="admin-order"
                            value={draft.sort_order}
                            onChange={(e) => setDraft({ ...draft, sort_order: e.target.value })}
                          />
                        </label>
                        <div className="admin-actions admin-edit-actions">
                          <button
                            className="admin-btn admin-btn-primary"
                            onClick={() => saveEdit(item.id)}
                            disabled={saving}
                          >
                            <FaSave size={10} /> Save
                          </button>
                          <button className="admin-btn admin-btn-ghost" onClick={() => setEditingId(null)}>
                            <FaTimes size={10} /> Cancel
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="admin-item-text">{item.message}</div>
                      <div className="admin-item-meta">
                        <span>Order {item.sort_order}</span>
                        <span>{Number(item.is_active) ? "Visible" : "Hidden"}</span>
                        <label className="admin-toggle">
                          <input
                            type="checkbox"
                            checked={!!Number(item.is_active)}
                            onChange={() => toggleActive(item)}
                          /> Show on site
                        </label>
                        <div className="admin-actions admin-edit-actions">
                          <button className="admin-btn admin-btn-ghost" onClick={() => startEdit(item)}>
                            <FaEdit size={10} /> Edit
                          </button>
                          <button className="admin-btn admin-btn-danger" onClick={() => remove(item)}>
                            <FaTrash size={10} /> Delete
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="admin-hint">
          Saved changes appear on the public top bar immediately. Refresh the site if it was already open.
        </p>
      </div>
    </div>
  );
}

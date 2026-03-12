"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Eye,
  Pencil,
  Trash2,
  Download,
  UserCheck,
  UserX,
  Users,
  Sprout,
  ShoppingCart,
  TrendingUp,
  GraduationCap,
  X,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { toast, Toaster } from "sonner";

// ==================== TYPES ====================

type UserRole = "petani" | "pembeli" | "investor" | "peserta" | "admin";

interface UserData {
  id: string;
  name: string | null;
  email: string | null;
  role: string | null;
  telepon: string | null;
  createdAt: string | null;
  profile?: {
    provinsi?: string | null;
    kota?: string | null;
    alamat?: string | null;
    tipeInvestor?: string | null;
    sumberDana?: string | null;
    pengalaman?: string | null;
    pekerjaan?: string | null;
    pendidikan?: string | null;
    minat?: string | null;
  } | null;
}

interface EditForm {
  name: string;
  email: string;
  telepon: string;
  role: string;
}

// ==================== CONFIG ====================

const roleConfig: Record<
  string,
  { color: string; bgColor: string; icon: React.ElementType; label: string }
> = {
  petani: {
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    icon: Sprout,
    label: "Petani",
  },
  pembeli: {
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    icon: ShoppingCart,
    label: "Pembeli",
  },
  investor: {
    color: "text-violet-700",
    bgColor: "bg-violet-50",
    icon: TrendingUp,
    label: "Investor",
  },
  peserta: {
    color: "text-pink-700",
    bgColor: "bg-pink-50",
    icon: GraduationCap,
    label: "Peserta",
  },
  admin: {
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    icon: Users,
    label: "Admin",
  },
};

const roleOptions = ["petani", "pembeli", "investor", "peserta", "admin"];

// ==================== COMPONENT ====================

const UsersContent = () => {
  const [allUsers, setAllUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [detailUser, setDetailUser] = useState<UserData | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [editModal, setEditModal] = useState<UserData | null>(null);
  const [editForm, setEditForm] = useState<EditForm>({
    name: "",
    email: "",
    telepon: "",
    role: "",
  });
  const [editLoading, setEditLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<UserData | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [bulkDeleteLoading, setBulkDeleteLoading] = useState(false);

  const itemsPerPage = 8;

  // ── Fetch all users ──────────────────────────────────────────────
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      setAllUsers(data);
    } catch {
      toast.error("Gagal memuat data user");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // ── Filter ───────────────────────────────────────────────────────
  const filteredUsers = allUsers.filter((user) => {
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      user.name?.toLowerCase().includes(q) ||
      user.email?.toLowerCase().includes(q) ||
      user.id.toLowerCase().includes(q);
    const matchRole = selectedRole === "Semua" || user.role === selectedRole;
    return matchSearch && matchRole;
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // ── Stats ────────────────────────────────────────────────────────
  const totalUsers = allUsers.length;
  const petaniCount = allUsers.filter((u) => u.role === "petani").length;
  const investorCount = allUsers.filter((u) => u.role === "investor").length;
  const pembeliCount = allUsers.filter((u) => u.role === "pembeli").length;

  // ── Select ───────────────────────────────────────────────────────
  const toggleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.size === paginatedUsers.length
        ? new Set()
        : new Set(paginatedUsers.map((u) => u.id)),
    );
  };
  const toggleSelectUser = (id: string) => {
    const next = new Set(selectedUsers);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelectedUsers(next);
  };

  // ── Detail ───────────────────────────────────────────────────────
  const openDetail = async (user: UserData) => {
    setOpenDropdownId(null);
    setLoadingDetail(true);
    setDetailUser(user);
    try {
      const res = await fetch(`/api/admin/users/${user.id}`);
      const data = await res.json();
      setDetailUser(data);
    } catch {
      toast.error("Gagal memuat detail user");
    } finally {
      setLoadingDetail(false);
    }
  };

  // ── Edit ─────────────────────────────────────────────────────────
  const openEdit = (user: UserData) => {
    setOpenDropdownId(null);
    setEditForm({
      name: user.name || "",
      email: user.email || "",
      telepon: user.telepon || "",
      role: user.role || "",
    });
    setEditModal(user);
  };

  const handleEdit = async () => {
    if (!editModal) return;
    setEditLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${editModal.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) throw new Error();
      toast.success("User berhasil diupdate");
      setEditModal(null);
      fetchUsers();
    } catch {
      toast.error("Gagal mengupdate user");
    } finally {
      setEditLoading(false);
    }
  };

  // ── Delete single ────────────────────────────────────────────────
  const handleDelete = async () => {
    if (!deleteConfirm) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${deleteConfirm.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      toast.success("User berhasil dihapus");
      setDeleteConfirm(null);
      setSelectedUsers((prev) => {
        const n = new Set(prev);
        n.delete(deleteConfirm.id);
        return n;
      });
      fetchUsers();
    } catch {
      toast.error("Gagal menghapus user");
    } finally {
      setDeleteLoading(false);
    }
  };

  // ── Bulk delete ──────────────────────────────────────────────────
  const handleBulkDelete = async () => {
    setBulkDeleteLoading(true);
    try {
      const res = await fetch("/api/admin/users/bulk-delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: Array.from(selectedUsers) }),
      });
      if (!res.ok) throw new Error();
      toast.success(`${selectedUsers.size} user berhasil dihapus`);
      setSelectedUsers(new Set());
      fetchUsers();
    } catch {
      toast.error("Gagal menghapus user");
    } finally {
      setBulkDeleteLoading(false);
    }
  };

  // ── Export CSV ───────────────────────────────────────────────────
  const handleExport = () => {
    const headers = ["ID", "Nama", "Email", "Role", "Telepon", "Bergabung"];
    const rows = filteredUsers.map((u) => [
      u.id,
      u.name || "",
      u.email || "",
      u.role || "",
      u.telepon || "",
      u.createdAt ? new Date(u.createdAt).toLocaleDateString("id-ID") : "",
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  // ==================== RENDER ====================

  return (
    <div className="space-y-6">
      <Toaster />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen User</h1>
          <p className="text-sm text-gray-500 mt-1">
            Kelola semua pengguna platform SiTani
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total User",
            value: totalUsers,
            icon: Users,
            bg: "bg-blue-50",
            color: "text-blue-600",
          },
          {
            label: "Petani",
            value: petaniCount,
            icon: Sprout,
            bg: "bg-emerald-50",
            color: "text-emerald-600",
          },
          {
            label: "Investor",
            value: investorCount,
            icon: TrendingUp,
            bg: "bg-violet-50",
            color: "text-violet-600",
          },
          {
            label: "Pembeli",
            value: pembeliCount,
            icon: ShoppingCart,
            bg: "bg-blue-50",
            color: "text-blue-600",
          },
        ].map(({ label, value, icon: Icon, bg, color }) => (
          <div
            key={label}
            className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3"
          >
            <div
              className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}
            >
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">
                {loading ? "..." : value}
              </p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama, email, atau ID..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/30 focus:border-[#2d5a3d] transition-all placeholder:text-gray-400"
            />
          </div>
          <select
            value={selectedRole}
            onChange={(e) => {
              setSelectedRole(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/30 focus:border-[#2d5a3d] text-gray-700"
          >
            <option value="Semua">Semua Role</option>
            {roleOptions.map((r) => (
              <option key={r} value={r}>
                {roleConfig[r]?.label || r}
              </option>
            ))}
          </select>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors ml-auto"
          >
            <Download className="w-4 h-4" /> Export
          </button>
        </div>

        {/* Bulk action bar */}
        {selectedUsers.size > 0 && (
          <div className="mt-3 flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
            <span className="text-sm text-blue-700 font-medium">
              {selectedUsers.size} user dipilih
            </span>
            <button
              onClick={handleBulkDelete}
              disabled={bulkDeleteLoading}
              className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors font-medium flex items-center gap-1"
            >
              {bulkDeleteLoading && (
                <Loader2 className="w-3 h-3 animate-spin" />
              )}
              Hapus Terpilih
            </button>
            <button
              onClick={() => setSelectedUsers(new Set())}
              className="text-xs text-blue-600 hover:underline ml-auto"
            >
              Batal
            </button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 text-xs border-b border-gray-100">
                <th className="pb-3 font-medium w-10">
                  <input
                    type="checkbox"
                    checked={
                      paginatedUsers.length > 0 &&
                      selectedUsers.size === paginatedUsers.length
                    }
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 accent-[#1a4528] cursor-pointer"
                  />
                </th>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Role</th>
                <th className="pb-3 font-medium">Telepon</th>
                <th className="pb-3 font-medium">Bergabung</th>
                <th className="pb-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#1a4528]" />
                    <p className="text-sm text-gray-400 mt-2">Memuat data...</p>
                  </td>
                </tr>
              ) : paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-400">
                    <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="font-medium text-gray-500">
                      Tidak ada user ditemukan
                    </p>
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => {
                  const role =
                    roleConfig[user.role || ""] || roleConfig["admin"];
                  const RoleIcon = role.icon;
                  const initials =
                    user.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase() || "??";
                  return (
                    <tr
                      key={user.id}
                      className={`border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors ${selectedUsers.has(user.id) ? "bg-blue-50/40" : ""}`}
                    >
                      <td className="py-3">
                        <input
                          type="checkbox"
                          checked={selectedUsers.has(user.id)}
                          onChange={() => toggleSelectUser(user.id)}
                          className="w-4 h-4 rounded border-gray-300 accent-[#1a4528] cursor-pointer"
                        />
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#1a4528] to-[#3d7a52] flex items-center justify-center text-white text-xs font-bold shrink-0">
                            {initials}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-900 truncate">
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${role.bgColor} ${role.color}`}
                        >
                          <RoleIcon className="w-3 h-3" />
                          {role.label}
                        </span>
                      </td>
                      <td className="py-3 text-gray-600 text-xs">
                        {user.telepon || "-"}
                      </td>
                      <td className="py-3 text-gray-500 text-xs">
                        {user.createdAt
                          ? new Date(user.createdAt).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              },
                            )
                          : "-"}
                      </td>
                      <td className="py-3 text-right">
                        <div className="relative inline-block">
                          <button
                            onClick={() =>
                              setOpenDropdownId(
                                openDropdownId === user.id ? null : user.id,
                              )
                            }
                            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                          {openDropdownId === user.id && (
                            <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1.5">
                              <button
                                onClick={() => openDetail(user)}
                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                <Eye className="w-3.5 h-3.5" /> Lihat Detail
                              </button>
                              <button
                                onClick={() => openEdit(user)}
                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                <Pencil className="w-3.5 h-3.5" /> Edit User
                              </button>
                              <div className="border-t border-gray-100 my-1" />
                              <button
                                onClick={() => {
                                  setDeleteConfirm(user);
                                  setOpenDropdownId(null);
                                }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="w-3.5 h-3.5" /> Hapus
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Menampilkan {(currentPage - 1) * itemsPerPage + 1}–
              {Math.min(currentPage * itemsPerPage, filteredUsers.length)} dari{" "}
              {filteredUsers.length} user
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${currentPage === page ? "bg-[#1a4528] text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Detail Modal ── */}
      {detailUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setDetailUser(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-linear-to-r from-[#1a4528] to-[#3d7a52] p-6 text-white relative">
              <button
                onClick={() => setDetailUser(null)}
                className="absolute top-4 right-4 p-1 rounded-lg hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                  {detailUser.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{detailUser.name}</h3>
                  <p className="text-white/70 text-sm">{detailUser.email}</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {loadingDetail ? (
                <div className="py-8 text-center">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#1a4528]" />
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">ID User</p>
                      <p className="text-xs font-mono text-gray-700 truncate">
                        {detailUser.id}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Role</p>
                      {detailUser.role && (
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${roleConfig[detailUser.role]?.bgColor} ${roleConfig[detailUser.role]?.color}`}
                        >
                          {roleConfig[detailUser.role]?.label}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Telepon</p>
                      <p className="text-sm font-medium text-gray-900">
                        {detailUser.telepon || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Bergabung</p>
                      <p className="text-sm font-medium text-gray-900">
                        {detailUser.createdAt
                          ? new Date(detailUser.createdAt).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              },
                            )
                          : "-"}
                      </p>
                    </div>
                  </div>

                  {/* Profile data */}
                  {detailUser.profile && (
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                        Data Profil
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(detailUser.profile)
                          .filter(([, v]) => v)
                          .map(([k, v]) => (
                            <div key={k}>
                              <p className="text-xs text-gray-400 capitalize mb-0.5">
                                {k}
                              </p>
                              <p className="text-sm font-medium text-gray-900">
                                {v as string}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </>
              )}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    setDetailUser(null);
                    openEdit(detailUser);
                  }}
                  className="flex-1 px-4 py-2.5 bg-[#1a4528] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a3d]"
                >
                  Edit User
                </button>
                <button
                  onClick={() => setDetailUser(null)}
                  className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Edit Modal ── */}
      {editModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setEditModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900">Edit User</h3>
              <button
                onClick={() => setEditModal(null)}
                className="p-1 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { label: "Nama", key: "name", type: "text" },
                { label: "Email", key: "email", type: "email" },
                { label: "Telepon", key: "telepon", type: "tel" },
              ].map(({ label, key, type }) => (
                <div key={key}>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    value={editForm[key as keyof EditForm]}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/30 focus:border-[#2d5a3d]"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Role
                </label>
                <select
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, role: e.target.value }))
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/30 focus:border-[#2d5a3d]"
                >
                  {roleOptions.map((r) => (
                    <option key={r} value={r}>
                      {roleConfig[r]?.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={handleEdit}
                disabled={editLoading}
                className="flex-1 px-4 py-2.5 bg-[#1a4528] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a3d] flex items-center justify-center gap-2"
              >
                {editLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Simpan
              </button>
              <button
                onClick={() => setEditModal(null)}
                className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirm Modal ── */}
      {deleteConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setDeleteConfirm(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Hapus User?</h3>
              <p className="text-sm text-gray-500">
                Anda akan menghapus{" "}
                <span className="font-semibold text-gray-800">
                  {deleteConfirm.name}
                </span>
                . Tindakan ini tidak dapat dibatalkan.
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 flex items-center justify-center gap-2"
              >
                {deleteLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Hapus
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Click outside dropdown */}
      {openDropdownId && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setOpenDropdownId(null)}
        />
      )}
    </div>
  );
};

export default UsersContent;

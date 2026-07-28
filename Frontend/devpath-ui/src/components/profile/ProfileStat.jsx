function ProfileStat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-slate-500">
        {icon}
        <p className="text-sm font-medium">{label}</p>
      </div>

      <p className="mt-4 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

export default ProfileStat;
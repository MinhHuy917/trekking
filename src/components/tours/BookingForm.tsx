export function BookingForm() {
  return (
    <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-bold text-slate-900">Booking tour</h3>
      <input className="w-full rounded-lg border p-3" placeholder="Họ và tên" />
      <input className="w-full rounded-lg border p-3" placeholder="Số điện thoại" />
      <input className="w-full rounded-lg border p-3" placeholder="Ngày khởi hành mong muốn" />
      <textarea className="w-full rounded-lg border p-3" placeholder="Ghi chú" rows={4} />
      <button type="submit" className="w-full rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-white">
        Gửi yêu cầu booking
      </button>
    </form>
  )
}

export default function Header() {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-violet-600 rounded-full text-white flex items-center justify-center">
            A
          </div>

          <div>
            <p className="font-medium">
              Admin
            </p>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
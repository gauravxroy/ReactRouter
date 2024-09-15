import { Bold, Unlink } from "lucide-react";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <h1 className="text-6xl font-bold flex gap-3 justify-center items-center text-white">
        404 Not Found! <Unlink size={60} strokeWidth={3} />
      </h1>
    </div>
  );
}

export default NotFound;

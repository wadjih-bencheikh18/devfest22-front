export function Description() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-center">Description</h1>
      <textarea
        type="text"
        rows="10"
        className="mx-20 rounded-lg border-2 border-gray-300"
      />
    </div>
  );
}

export default function Users() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-100 group border-2 border-gray-200 shadow-lg w-96 p-4">
        <h4 className="font-bold mb-4 text-left">Promoções da semana</h4>
        <p className="text-gray-500 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          beatae molestiae dolores id autem vitae officiis.
        </p>
        <div className="flex justify-end mt-4 gap-4">
          <button className="bg-gray-400 w-28 px-4 py-2 rounded-lg text-white font-semibold active:bg-gray-300">
            Cancelar
          </button>
          <button className="bg-blue-600  w-28 px-4 py-2 rounded-lg text-white font-semibold active:bg-blue-400">
            Salvar
          </button>
        </div>
      </div>
    </main>
  );
}

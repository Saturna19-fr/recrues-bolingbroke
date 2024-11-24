import Image from "next/image";
import ActSteps from "@/components/actsteps"
export default function Home() {
  return (
    <div data-theme='light' className="">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
  <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center bg-gradient-to-r from-gray-700 to-gray-800"></div>
  <div className="relative  bg-primary-content px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div className="mx-auto max-w-md">
      <div className="flex items-center">
      <Image src="/SASPA_GTA_V.webp" className="h-10" alt="Tailwind Play" />
      <p className="ml-4 text-2xl/7 font-bold  sm:truncate sm:text-3xl sm:tracking-tight">Pénitancier de Bolingbroke</p>

      </div>
      <div className="">
        <div className="space-y-6 py-8 text-base leading-7 ">
          <p className="text-sec">C&#39;est le moment de regarder si tu as bien suivi toute la procédure !</p>
          <ActSteps />
          
          <p>A toi d&#39;adopter le style que tu veux pour l&#39;admission, le but est que vous ayez tout les deux une belle scène</p>
        </div>
        <div className="divider"></div>
        <div className="pt-3 text-base font-semibold leading-7">
          <p className="text-gray-900">Le plus important, c&#39;est de demander quand tu n&#39;es pas sûr&nbsp;!</p>
          <p>
            <a href="https://www.canva.com/design/DAGJhqyHU_k/CDhYmaMto6qxfxnA1FnzLQ/edit" className="text-sky-500 hover:text-sky-600">Accéder au canva &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

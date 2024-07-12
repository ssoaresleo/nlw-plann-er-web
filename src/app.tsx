import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function handleOpenGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen);
  }

  function handleOpenGuestsModal() {
    setIsGuestsModalOpen(!isGuestsModalOpen);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.toString();

    if (!email) return;

    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvite(email: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-patter bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />

              <input
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                className="bg-zinc-800 flex items-center gap-2 hover:bg-zinc-700 transition-all text-zinc-200 rounded-lg px-5 py-2 font-medium"
                onClick={handleOpenGuestsInput}
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="bg-lime-300 flex items-center gap-2 hover:bg-lime-400 transition-all text-lime-950 rounded-lg px-5 py-2 font-medium"
                onClick={handleOpenGuestsInput}
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 group">
              <button
                type="button"
                className="flex items-center gap-2 flex-1 text-left text-zinc-400 group-hover:text-zinc-50 transition-all"
                onClick={handleOpenGuestsModal}
              >
                <UserRoundPlus className="size-5" />
                <span className="text-lg flex-1">Quem estará na viagem?</span>
              </button>

              <button className="bg-lime-300 flex items-center gap-2 hover:bg-lime-400 transition-colors text-lime-950 rounded-lg px-5 py-2 font-medium">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button onClick={handleOpenGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {emailsToInvite &&
                emailsToInvite.map((email) => (
                  <div
                    className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-8 text-zinc-300"
                    key={email}
                  >
                    <span>{email}</span>
                    <button
                      type="button"
                      onClick={() => removeEmailFromInvite(email)}
                    >
                      <X className="size-4 text-zinc-400" />
                    </button>
                  </div>
                ))}
            </div>

            <div className="w-full h-px bg-zinc-800"></div>

            <form
              onSubmit={addNewEmailToInvite}
              className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
            >
              <div className="flex items-center px-2 gap-2 flex-1">
                <AtSign className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o email do convidado"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <button
                type="submit"
                className="bg-lime-300 flex items-center gap-2 hover:bg-lime-400 transition-colors text-lime-950 rounded-lg px-5 py-2 font-medium"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

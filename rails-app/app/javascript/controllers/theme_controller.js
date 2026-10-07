import { Controller } from "@hotwired/stimulus"

// Alterna entre tema claro e escuro, persistindo a escolha do usuário.
// O tema inicial já é aplicado pelo script inline no <head> do layout.
export default class extends Controller {
  toggle() {
    const root = document.documentElement
    const next = root.dataset.theme === "dark" ? "light" : "dark"

    root.dataset.theme = next
    try {
      localStorage.setItem("theme", next)
    } catch {
      // localStorage indisponível (modo privado etc.): segue sem persistir
    }
  }
}

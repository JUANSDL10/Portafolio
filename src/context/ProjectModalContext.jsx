import { createContext, useContext } from 'react'

/**
 * Expone `openProject(slug)` a cualquier tarjeta del árbol sin prop-drilling.
 * El Provider se monta en App con la función de `useHashRoute`.
 */
const ProjectModalContext = createContext(() => {})

export const ProjectModalProvider = ProjectModalContext.Provider

export function useOpenProject() {
  return useContext(ProjectModalContext)
}

export default ProjectModalContext

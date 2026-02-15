import { create } from 'zustand';
type ModalStore = {
  isModalOpen: boolean;
  selectProject: number | null;
  openModal: (id: number) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  selectProject: null,
  openModal: (id) => set({ isModalOpen: true, selectProject: id }),
  closeModal: () => set({ isModalOpen: false, selectProject: null }),
}));

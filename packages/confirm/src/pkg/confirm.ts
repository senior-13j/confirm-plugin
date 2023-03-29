type ConfirmParams = {
  message: string;
  onDone: () => void;
  onClose: () => void;
};

const confirm = ({ message, onDone, onClose }: ConfirmParams) => {

};

export default function useConfirm() {

  return {
    confirm
  }
}
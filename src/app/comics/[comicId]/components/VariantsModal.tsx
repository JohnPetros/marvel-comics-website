import * as Dialog from "@radix-ui/react-dialog";

export function VariantsModal() {
  return (
    <Dialog.DialogPortal>
      <Dialog.Overlay className="bg-black fixed z-40">
        <Dialog.Content className="bg-black top-1/2 left-1/2 w-[90vw] max-w-lg p-6">
          <div>
            <Dialog.Close className="bg-red-600">x</Dialog.Close>
          </div>

          <div>ggggggggggggggggggggggggggggggggggggg</div>
          <div>
            <h4>Variants of this comic</h4>
            <div className="flex"></div>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.DialogPortal>
  );
}

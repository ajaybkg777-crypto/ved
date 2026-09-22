import { ChevronLeft, ChevronRight } from "lucide-react";
import Modal from "./common/Modal.jsx";
import Button from "./common/Button.jsx";

export default function MemoryModal({ memories, active, onClose, onMove }) {
  if (!active) return null;
  return (
    <Modal open={Boolean(active)} onClose={onClose} labelledBy="memory-title">
      <div className={`memory-modal ${active.kind === "poster" ? "memory-poster" : ""}`}>
        <img src={active.image} alt={active.title} />
        <div>
          <span>{active.date}</span>
          <h2 id="memory-title">{active.title}</h2>
          <p>{active.description}</p>
          <div className="modal-actions">
            <Button variant="ghost" onClick={() => onMove(-1)} aria-label="Previous memory"><ChevronLeft size={16} /> Previous</Button>
            <Button variant="ghost" onClick={() => onMove(1)} aria-label="Next memory">Next <ChevronRight size={16} /></Button>
          </div>
          <small>{memories.findIndex((item) => item.id === active.id) + 1} / {memories.length}</small>
        </div>
      </div>
    </Modal>
  );
}

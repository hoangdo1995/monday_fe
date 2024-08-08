import { arrayMove } from "@dnd-kit/sortable";

export  const handleDragEndSortable =(event,setState)=>{
    const { active, over } = event;
    console.log("drag end",event);
    
    if(!over) return;
    if(over?.id){
        if (active.id !== over.id) {
            setState((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
    
                return arrayMove(items, oldIndex, newIndex);
        });
        }
    }
}
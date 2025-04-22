import { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
    const [notes, setNotes] = useState([
       {id: "1", text: "Note One"},
       {id: "2", text: "Note Two"},
       {id: "3", text: "Note Three"},
    ]);

   const [modalVisible, setModalVisible] = useState(false);
   const [newNote, setNewNote] = useState("");

   // Add New Note
   const addNote = () => {
    if(newNote.trim() === "") return; // This helps prevent empty notes
    
    setNotes((prevNotes) => [
        ...prevNotes,
        {id: Date.now.toString(), text: newNote},
    ]);

    setNewNote(""); // Reset to make it back an empty string
    setModalVisible(false); // Want to close our Modal after with save the input
   }

    return(
        <View style={styles.container}>
          {/* Note List */}
          <NoteList notes={notes} />

          <TouchableOpacity style={styles.addButton} onPress={ () => setModalVisible(true)}>
            <Text style={styles.addButtonText}>+ Add Note</Text>
          </TouchableOpacity>

           {/* Modal */}
          <AddNoteModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
      },
      addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
})

export default NoteScreen;
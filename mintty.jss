Globals
	collection c_DragAndDropSource,
	collection c_DragAndDropDest

; Override this function to enable drag and drop, which copies text to clipboard
void function GetDragAndDropCollectionData(collection dragItem)
dragItem.element = Null()
dragItem.x = getCursorCol ()
dragItem.y = getCursorRow ()
dragItem.text = GetWord ()
EndFunction

; More accurate speech by line or character movement, especially when Accessibility Driver turned off.
; Make JAWS speak the line which cursor moves to.
Script SayPriorLine()
	PriorLine()
	delay(1)
	SayLine()
EndScript

Script SayNextLine()
	NextLine()
	delay(1)
	SayLine()
EndScript

; Make JAWS speak the character which cursor moves to.
Script SayPriorCharacter()
	PriorCharacter()
	delay(1)
	SayCharacter()
EndScript

Script SayNextCharacter()
	NextCharacter()
	delay(1)
	SayCharacter()
EndScript

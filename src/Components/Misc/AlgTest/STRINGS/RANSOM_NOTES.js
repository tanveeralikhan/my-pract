export const getRansomNotes = () => {
  let ransomNote = "aa",
    magazine = "aab";
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }

  if (!ransomNote) return true;
  else return false;
};

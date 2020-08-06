import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
  // return the actual validator fn inside closure
  // validator fn must accept a formControl to be used by the form obj
  return (control: FormControl) => {
    // If no list of restricted word is provided, the filter is disabled
    if (!words) {
      return null;
    }
    // Search the text of the control and return a list of matching words
    const matches = words
      .map((word) => (control.value.includes(word) ? word : null))
      .filter((w) => w != null);
    // return the list of matches (if any) or null if no matches found
    return matches?.length > 0 ? { restrictedWords: matches.join(', ') } : null;
  };
}

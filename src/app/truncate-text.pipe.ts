import { Pipe, PipeTransform } from '@angular/core';

/**
  * Truncate text to the specified length and add '...'.
  * Kudos: http://codebuckets.com/2018/01/23/angular-pipe-to-truncate-text-to-the-nearest-whole-word/
  */
@Pipe({
  name: 'truncatetext'
})

export class TruncateTextPipe implements PipeTransform {
  transform(value: string, length: number): string {
    const biggestWord = 50;
    const elipses = '...';
    const noBodyText = 'PLEASE HELP US PROCESS GITHUB ISSUES FASTER';
    const needsBodyText = 'Description instructions deleted.';

    if (typeof value === 'undefined') {
      return value;
    }

    if (value.length <= length) {
      return value;
    }

    if (length < elipses.length) {
      return '';
    }

    // If the author does not put in a description/body, a comment is inserted
    if (value.indexOf(noBodyText) !== -1) {
      return needsBodyText;
    }

    // Truncate to about correct length
    let truncatedText = value.slice(0, length + biggestWord);

    // Now nibble ends till correct length
    while (truncatedText.length > length - elipses.length) {

      const lastSpace = truncatedText.lastIndexOf(' ');

      if (lastSpace === -1) {
        truncatedText = '';
        break;
      }

      truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '');
    }

    return truncatedText + elipses;
  }
}

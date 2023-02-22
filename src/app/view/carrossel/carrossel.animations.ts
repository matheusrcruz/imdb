import {style, animate, animation} from '@angular/animations'



export enum CarrosselAnimation {
  Fade = 'fade',
}

export const fadein = animation([
  style({
    opacity: 0
  }),
  animate('{{time}} ease-in-out', style({opacity: 1}))]);

  export const fadeout = animation([
    animate('{{time}} ease-in-out', style({opacity: 0}))

  ]);

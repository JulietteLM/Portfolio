import type { ISection } from '@/stores/sections/section.ts'

export const teaching: ISection = {
  title: 'Teaching',
  id: 'teaching',
  paragraph:
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet purus. Maecenas pulvinar quam nunc, id vehicula metus egestas non. Ut rhoncus neque eu urna dignissim feugiat. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ligula leo, tempus aliquam tincidunt ut, fermentum in tellus. Sed sed nisi dolor.\n' +
    '\n' +
    'Maecenas velit arcu, rhoncus dignissim elit vel, aliquet iaculis ante. Fusce posuere dui ut efficitur sagittis. Integer rutrum tincidunt lobortis. Cras risus dolor, dapibus non porttitor nec, vulputate vel odio. Morbi mollis urna a pharetra posuere. Aliquam aliquam justo finibus scelerisque elementum. Sed eget ex iaculis, sagittis eros at, blandit lorem. Etiam rutrum tempor elit, vel accumsan est. Nunc id mollis massa. Morbi eu felis mi. Integer congue hendrerit odio sit amet efficitur. Integer non mi dictum quam dapibus convallis. Aliquam porta nisl ac nunc tempor ultricies sed a magna. Quisque elit leo, porta quis ultricies vitae, congue et dolor.\n' +
    '\n' +
    'Morbi laoreet malesuada ipsum, sed mattis augue facilisis porta. Integer eu iaculis lectus. Etiam eget varius ex, id pulvinar odio. Fusce tempor nunc laoreet nunc congue dapibus. Aenean id cursus enim. Integer convallis velit magna, vitae semper orci fringilla consectetur. Sed aliquam, sapien non tincidunt pretium. ',
}

export type ITeaching = {
  id: string
  year: string
  teachingSubject: string
  level: string
  typeOfTeaching: string
}

export const teachings: ITeaching[] = [
  {
    id: 'treeam2025',
    year: '2025',
    title: 'Treeam',
    subtitle: 'An Immersive and Collaborative Serious Game About Trees and Forest',
    publication: "IEEE VR'25 - 3DUI Contest",
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu arcu odio. Donec pretium nulla eros, sed porta diam commodo at. Curabitur arcu arcu, pulvinar vitae pellentesque ac, iaculis at ligula. In vel est tempor, consectetur est quis, molestie est. Quisque non accumsan ex. Suspendisse facilisis orci diam, ac porta augue condimentum in. Vestibulum nec nisi vestibulum, accumsan nibh non, maximus eros. Suspendisse justo orci, pellentesque quis purus eu, efficitur lacinia mauris. Vestibulum sit amet eros eu massa interdum auctor eu vitae mi. Nullam viverra pretium magna at dignissim. Sed sollicitudin massa eu maximus feugiat. Nullam vitae vulputate nisi. Sed pulvinar purus id tempor condimentum. Praesent imperdiet porttitor sapien, eu euismod ipsum ultricies sed.\n' +
      '\n' +
      'Morbi at ex eget mi pharetra pellentesque. Integer auctor elit nec mauris sollicitudin, non convallis ante auctor. Sed nec leo at velit cursus vulputate sit amet id felis. Cras bibendum odio nec risus condimentum, nec ullamcorper mauris bibendum. Curabitur egestas, lorem et fermentum venenatis, purus urna consectetur massa, non porttitor urna nisi ac ex. Aenean pellentesque dui est, sit amet feugiat ligula imperdiet a. Vivamus egestas nibh mauris. In eget sapien feugiat neque semper finibus sit amet quis est. Maecenas auctor justo leo, in scelerisque diam. ',
  },
]

import type { ISection } from '@/stores/sections/section.ts'
import Projects from '@/components/Sections/projects/Projects.vue'

export const projectSection: ISection = {
  id: 'projects',
  title: 'Projects',
  component: Projects,
}

export type IProject = {
  id: string
  year: string
  title: string
  subtitle?: string
  publication?: string
  content?: string
}

export const projects: IProject[] = [
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
  {
    id: 'workspaces2025',
    year: '2025',
    title: 'Shared, Replicated or Separated ?',
    subtitle: 'A Comparative Study of Virtual Workspace Configurations for Collaborative Hands-On Learning',
    publication: "ISMAR'25",
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu arcu odio. Donec pretium nulla eros, sed porta diam commodo at. Curabitur arcu arcu, pulvinar vitae pellentesque ac, iaculis at ligula. In vel est tempor, consectetur est quis, molestie est. Quisque non accumsan ex. Suspendisse facilisis orci diam, ac porta augue condimentum in. Vestibulum nec nisi vestibulum, accumsan nibh non, maximus eros. Suspendisse justo orci, pellentesque quis purus eu, efficitur lacinia mauris. Vestibulum sit amet eros eu massa interdum auctor eu vitae mi. Nullam viverra pretium magna at dignissim. Sed sollicitudin massa eu maximus feugiat. Nullam vitae vulputate nisi. Sed pulvinar purus id tempor condimentum. Praesent imperdiet porttitor sapien, eu euismod ipsum ultricies sed.\n' +
      '\n' +
      'Morbi at ex eget mi pharetra pellentesque. Integer auctor elit nec mauris sollicitudin, non convallis ante auctor. Sed nec leo at velit cursus vulputate sit amet id felis. Cras bibendum odio nec risus condimentum, nec ullamcorper mauris bibendum. Curabitur egestas, lorem et fermentum venenatis, purus urna consectetur massa, non porttitor urna nisi ac ex. Aenean pellentesque dui est, sit amet feugiat ligula imperdiet a. Vivamus egestas nibh mauris. In eget sapien feugiat neque semper finibus sit amet quis est. Maecenas auctor justo leo, in scelerisque diam. ',
  },
  {
    id: 'creacubeVR2024',
    year: '2024',
    title: 'A VR creative problem solving task',
    subtitle: 'Learning with immersive technologies : a VR task to study collaborative learning',
    publication: "IHM'24",
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu arcu odio. Donec pretium nulla eros, sed porta diam commodo at. Curabitur arcu arcu, pulvinar vitae pellentesque ac, iaculis at ligula. In vel est tempor, consectetur est quis, molestie est. Quisque non accumsan ex. Suspendisse facilisis orci diam, ac porta augue condimentum in. Vestibulum nec nisi vestibulum, accumsan nibh non, maximus eros. Suspendisse justo orci, pellentesque quis purus eu, efficitur lacinia mauris. Vestibulum sit amet eros eu massa interdum auctor eu vitae mi. Nullam viverra pretium magna at dignissim. Sed sollicitudin massa eu maximus feugiat. Nullam vitae vulputate nisi. Sed pulvinar purus id tempor condimentum. Praesent imperdiet porttitor sapien, eu euismod ipsum ultricies sed.\n' +
      '\n' +
      'Morbi at ex eget mi pharetra pellentesque. Integer auctor elit nec mauris sollicitudin, non convallis ante auctor. Sed nec leo at velit cursus vulputate sit amet id felis. Cras bibendum odio nec risus condimentum, nec ullamcorper mauris bibendum. Curabitur egestas, lorem et fermentum venenatis, purus urna consectetur massa, non porttitor urna nisi ac ex. Aenean pellentesque dui est, sit amet feugiat ligula imperdiet a. Vivamus egestas nibh mauris. In eget sapien feugiat neque semper finibus sit amet quis est. Maecenas auctor justo leo, in scelerisque diam. ',
  },
  {
    id: 'butterfly2022',
    year: '2025',
    title: 'Butterfly',
    subtitle: 'A VR escape game',
    publication: "Master 2 Project",
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu arcu odio. Donec pretium nulla eros, sed porta diam commodo at. Curabitur arcu arcu, pulvinar vitae pellentesque ac, iaculis at ligula. In vel est tempor, consectetur est quis, molestie est. Quisque non accumsan ex. Suspendisse facilisis orci diam, ac porta augue condimentum in. Vestibulum nec nisi vestibulum, accumsan nibh non, maximus eros. Suspendisse justo orci, pellentesque quis purus eu, efficitur lacinia mauris. Vestibulum sit amet eros eu massa interdum auctor eu vitae mi. Nullam viverra pretium magna at dignissim. Sed sollicitudin massa eu maximus feugiat. Nullam vitae vulputate nisi. Sed pulvinar purus id tempor condimentum. Praesent imperdiet porttitor sapien, eu euismod ipsum ultricies sed.\n' +
      '\n' +
      'Morbi at ex eget mi pharetra pellentesque. Integer auctor elit nec mauris sollicitudin, non convallis ante auctor. Sed nec leo at velit cursus vulputate sit amet id felis. Cras bibendum odio nec risus condimentum, nec ullamcorper mauris bibendum. Curabitur egestas, lorem et fermentum venenatis, purus urna consectetur massa, non porttitor urna nisi ac ex. Aenean pellentesque dui est, sit amet feugiat ligula imperdiet a. Vivamus egestas nibh mauris. In eget sapien feugiat neque semper finibus sit amet quis est. Maecenas auctor justo leo, in scelerisque diam. ',
  },
  {
    id: 'submersion2022',
    year: '2022',
    title: 'SubMersion',
    subtitle: 'Creation of an Interactive and Immersive Art Exhibition',
    publication: "Master 1 Project",
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu arcu odio. Donec pretium nulla eros, sed porta diam commodo at. Curabitur arcu arcu, pulvinar vitae pellentesque ac, iaculis at ligula. In vel est tempor, consectetur est quis, molestie est. Quisque non accumsan ex. Suspendisse facilisis orci diam, ac porta augue condimentum in. Vestibulum nec nisi vestibulum, accumsan nibh non, maximus eros. Suspendisse justo orci, pellentesque quis purus eu, efficitur lacinia mauris. Vestibulum sit amet eros eu massa interdum auctor eu vitae mi. Nullam viverra pretium magna at dignissim. Sed sollicitudin massa eu maximus feugiat. Nullam vitae vulputate nisi. Sed pulvinar purus id tempor condimentum. Praesent imperdiet porttitor sapien, eu euismod ipsum ultricies sed.\n' +
      '\n' +
      'Morbi at ex eget mi pharetra pellentesque. Integer auctor elit nec mauris sollicitudin, non convallis ante auctor. Sed nec leo at velit cursus vulputate sit amet id felis. Cras bibendum odio nec risus condimentum, nec ullamcorper mauris bibendum. Curabitur egestas, lorem et fermentum venenatis, purus urna consectetur massa, non porttitor urna nisi ac ex. Aenean pellentesque dui est, sit amet feugiat ligula imperdiet a. Vivamus egestas nibh mauris. In eget sapien feugiat neque semper finibus sit amet quis est. Maecenas auctor justo leo, in scelerisque diam. ',
  },
  {
    id: 'murier2022',
    year: '2022',
    title: 'Video Game for Artistic Expression',
    subtitle: 'Conception of VG focused on ',
    publication: "Master 2 Project",
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu arcu odio. Donec pretium nulla eros, sed porta diam commodo at. Curabitur arcu arcu, pulvinar vitae pellentesque ac, iaculis at ligula. In vel est tempor, consectetur est quis, molestie est. Quisque non accumsan ex. Suspendisse facilisis orci diam, ac porta augue condimentum in. Vestibulum nec nisi vestibulum, accumsan nibh non, maximus eros. Suspendisse justo orci, pellentesque quis purus eu, efficitur lacinia mauris. Vestibulum sit amet eros eu massa interdum auctor eu vitae mi. Nullam viverra pretium magna at dignissim. Sed sollicitudin massa eu maximus feugiat. Nullam vitae vulputate nisi. Sed pulvinar purus id tempor condimentum. Praesent imperdiet porttitor sapien, eu euismod ipsum ultricies sed.\n' +
      '\n' +
      'Morbi at ex eget mi pharetra pellentesque. Integer auctor elit nec mauris sollicitudin, non convallis ante auctor. Sed nec leo at velit cursus vulputate sit amet id felis. Cras bibendum odio nec risus condimentum, nec ullamcorper mauris bibendum. Curabitur egestas, lorem et fermentum venenatis, purus urna consectetur massa, non porttitor urna nisi ac ex. Aenean pellentesque dui est, sit amet feugiat ligula imperdiet a. Vivamus egestas nibh mauris. In eget sapien feugiat neque semper finibus sit amet quis est. Maecenas auctor justo leo, in scelerisque diam. ',
  },

]

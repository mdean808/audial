import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/mdean808/audial.git', // Update to point to your repository
    user: {
      name: 'Morgan Dean', // update to use your name
      email: 'morgandeanhi@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);

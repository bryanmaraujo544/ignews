import * as Prismic from '@prismicio/client';

// Fill in your repository name
export const repositoryName = 'Ignews';

export const prismic = Prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    'MC5ZdElNeXhBQUFDQUFfbEE0.77-977-9bV11E--_ve-_vRdkKe-_ve-_ve-_vVDvv73vv71XSu-_ve-_ve-_ve-_vRrvv70tfu-_ve-_ve-_vX7vv70',

  routes: [
    {
      type: 'post',
      path: '/posts',
    },
  ],
});

import React from 'react';
import Icon from './Icon';

const mapSocialMediaUrls = {
  Linkedin: {
    url: 'https://www.linkedin.com/in/liviarett/',
    type: 'fa-linkedin-square',
  },
  Facebook: {
    url: 'https://www.facebook.com/liviarm',
    type: 'fa-facebook-square',
  },
  Github: {
    url: 'https://github.com/liviarett',
    type: 'fa-github-square',
  },
  Email: {
    url: 'mailto:livia.rett@gmail.com',
    type: 'fa-envelope',
  }
}

const SocialMediaIcon = ({ media }) => (
  <a title={media} href={mapSocialMediaUrls[media].url} target="_blank">
    <Icon type={mapSocialMediaUrls[media].type} />
  </a>
);

export default SocialMediaIcon;
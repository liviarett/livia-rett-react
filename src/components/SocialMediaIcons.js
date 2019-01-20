import React from 'react';
import Icon from './Icon';

const mapSocialMediaUrls = [
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/liviarett/',
    type: 'fab fa-linkedin',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/liviarm',
    type: 'fab fa-facebook-square',
  },
  {
    title: 'Github',
    url: 'https://github.com/liviarett',
    type: 'fab fa-github-square',
  },
  {
    title: 'Email',
    url: 'mailto:livia.rett@gmail.com',
    type: 'fa fa-envelope',
  }]

const SocialMediaIcons = ({ openModal }) => <div>
  {mapSocialMediaUrls.map(media =>
    <a title={media.title} href={media.url} key={media.title} target="_blank">
      <Icon type={media.type} />
    </a>)}
  <a>
    <Icon type={'far fa-file-alt'} handleClick={() => openModal('cv')} />
  </a>
</div>;

export default SocialMediaIcons;
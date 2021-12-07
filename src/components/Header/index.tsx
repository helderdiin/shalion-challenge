import React, { FC } from 'react';
import { Logo } from '~/assets/images';
import { Button } from '~/components';
import { LogoWrapper, Overlay, Wrapper } from './styles';

const Header: FC = () => (
  <Wrapper>
    <Overlay>
      <LogoWrapper href="/">
        <img src={Logo} alt="logo" />
      </LogoWrapper>
      {/* <div className="header__items">
        <a
          className="navbar__icon"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <svg>
            <use xlinkHref="#icon-facebook" />
          </svg>
        </a>
        <a
          className="navbar__icon"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg>
            <use xlinkHref="#icon-instagram" />
          </svg>
        </a>
        <a
          className="navbar__icon"
          href="https://www.telegram.org/?setln=pt-br"
          target="_blank"
          rel="noreferrer"
        >
          <svg>
            <use xlinkHref="#icon-telegram" />
          </svg>
        </a>
        <a
          className="navbar__icon"
          href="https://www.tiktok.com/pt-BR/"
          target="_blank"
          rel="noreferrer"
        >
          <svg>
            <use xlinkHref="#icon-tiktok" />
          </svg>
        </a>
        <a
          className="navbar__icon"
          href="https://twitter.com/login?lang=pt"
          target="_blank"
          rel="noreferrer"
        >
          <svg>
            <use xlinkHref="#icon-twitter" />
          </svg>
        </a>
      </div> */}
      <Button onClick={() => {}}>Entrar</Button>
    </Overlay>
  </Wrapper>
);

export default Header;

import React from 'react'
import MailOutLineIcon from '@material-ui/icons/MailOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div>
        <h5 className="contactus-heading">Contact us through Social Media</h5>
        <a className="social-icons" href="mailto:icreateuz@gmail.com">{<MailOutLineIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </MailOutLineIcon>}</a>

        <a className="social-icons" href="https://t.me/gulmatovdoston">{<TelegramIcon>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </TelegramIcon>}</a>

        <a className="social-icons" href="https://instagram.com/doston.gulmatov.01">{<InstagramIcon>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </InstagramIcon>}</a>

        <a className="social-icons" href="https://twitter.com/alitashmatov07">{<TwitterIcon>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </TwitterIcon>}</a>

        <a className="social-icons" href="https://github.com/dostongulmatov">{<GitHubIcon>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </GitHubIcon>}</a>
    </div>
  )
}

export default Footer

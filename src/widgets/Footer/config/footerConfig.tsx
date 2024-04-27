import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export interface IFooterLink {
  title: string
  link: string
}

export interface IFooterSocialLink {
  icon: JSX.Element
  link: string
}

export interface IFooterConfig {
  links: IFooterLink[]
  socialLinks?: IFooterSocialLink[]
}

export const footerConfig: IFooterConfig = {
  links: [
    {
      title: 'About Jooble',
      link: '/about'
    },
    {
      title: 'For Job Boards',
      link: '/job-boards'
    },
    {
      title: 'For Publishers',
      link: '/publishers'
    },
    {
      title: 'Top Job Searches',
      link: '/top-job-searches'
    }
  ],
  socialLinks: [
    {
      icon: <FacebookIcon fontSize={'small'} color={'primary'}/>,
      link: 'https://www.facebook.com/jooble'
    },
    {
      icon: <LinkedInIcon fontSize={'small'} color={'primary'}/>,
      link: 'https://www.linkedin.com/company/jooble'
    },
    {
      icon: <InstagramIcon fontSize={'small'} color={'primary'}/>,
      link: 'https://www.instagram.com/jooblecom/'
    }
  ]
}

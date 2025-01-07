import {SOCIAL_MEDIA_LINKS} from '../constants'
const Footer = () => {
  return (
    <div className="mb-8 mt-6">
    <div className='flex items-end justify-end gap-8'>
    {SOCIAL_MEDIA_LINKS.map((link,index)=>(
        <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
            {link.icon}
        </a>
    ))}
    </div>
    </div>
  )
}

export default Footer
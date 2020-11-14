import { FaTwitter } from 'react-icons/fa'
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import card_2_content from '../utilities/card_2_content.json';
import card_1_content from '../utilities/card_1_content.json';

export default function Home() {

  function card_style_1(value) {
    const { social_icon, social_icon_color, social_handle, data, data_text, bottom_icon, bottom_icon_color, bottom_icon_data } = value;
    return (
      <div className="col-sm">
        <div className="card mb-4 card-style-1" style={{ borderTop: `5px solid ${social_icon_color}` }}>
          <div className="card-body">
            <h6 className="card-title"><i className="card-icons mr-2" style={{ color: social_icon_color }}>
              {social_icon === 'Facebook' ? <AiFillFacebook /> : (social_icon === 'Instagram' ? <AiOutlineInstagram /> : (social_icon === 'Twitter' ? <FaTwitter /> : <AiFillYoutube />))}
            </i>{social_handle}</h6>
            <p className="card-text">{data}
              <h6>{data_text}</h6>
            </p>
            <a href="#" className="card-link font-weight-bold" style={{ color: bottom_icon_color }}>{bottom_icon == 'Dropup' ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{bottom_icon_data}</a>
          </div>
        </div>
      </div>
    )
  }

  function card_style_2(value) {
    const { heading, icon_color, social_icon, bottom_data, bottom_icon, bottm_icon_color, data_percent } = value;
    return (
      <div className="col-sm-3 mb-4">
        <div className="card card-style-2">
          <div className="card-body">
            <div className="card-title">
              <h6>{heading}</h6>
              <i style={{ color: icon_color }}>
                {social_icon === 'Facebook' ? <AiFillFacebook /> : (social_icon === 'Instagram' ? <AiOutlineInstagram /> : (social_icon === 'Twitter' ? <FaTwitter /> : <AiFillYoutube />))}
              </i>
            </div>
            <div className="card-bottom">
              <p className="card-text font-weight-bolder">{bottom_data}</p>
              <a href="#" className="card-link" style={{ color: bottm_icon_color }}>
                {bottom_icon == 'Dropup' ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{data_percent}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
      <main>
        <div className="upper-container"></div>
        <div className="lower-container">
          <div className="container">
            <div className="row header mb-5">
              <div className="col-sm niche-border">
                <h2>Social Media Dashboard</h2>
                <h6>Total Followers:23,004</h6>
              </div>
              <div className="col-sm">
                <label class="switch float-right">
                  <input type="checkbox" onChange={() => document.body.classList.toggle('light-mode')} />
                  <span class="slider round"></span>
                </label>
                <span className="mt-1 mr-3">Drak Mode</span>
              </div>
            </div>
            <div className="row mb-4">
              {card_1_content.map(value => {
                return card_style_1(value);
              })}
            </div>
            <div className="row mb-2">
              <div className="col-12 mb-3">
                <h3>Overview-Today</h3>
              </div>
              {card_2_content.map(value => {
                return card_style_2(value);
              })}
            </div>
            <div className="row">
              <div className="col-sm text-center">
                <div className="attribution">
                  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                  Coded by <a href="https://github.com/tsaxena4k" target="_blank">Tushar Saxena</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

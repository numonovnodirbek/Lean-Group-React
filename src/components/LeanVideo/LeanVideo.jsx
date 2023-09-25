import React from "react";
import "./lean-section.scss";

const LeanVideo = () => {
  return (
    <section id="lean-video" className="lean-video">
      <div className="container">
        <h1 className="video_title">
          О компании <span>LEANGROUP</span>
        </h1>
        <div className="about-wrapper">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/8L6SujxxlRs"
              title="Lean Solutions Group a Great Place To Work"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="play-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="73"
                viewBox="0 0 74 73"
                fill="none"
              >
                <path
                  d="M37 0.0983582C16.5674 0.0983582 0 16.3942 0 36.4918C0 56.5894 16.5674 72.8852 37 72.8852C57.4326 72.8852 74 56.5894 74 36.4918C74 16.3942 57.4326 0.0983582 37 0.0983582ZM48.9011 37.0523L30.8636 49.9606C30.7647 50.0305 30.6482 50.0722 30.5267 50.0812C30.4053 50.0902 30.2837 50.0661 30.1753 50.0115C30.0669 49.9569 29.9759 49.874 29.9123 49.7719C29.8487 49.6698 29.8149 49.5524 29.8147 49.4326V23.6322C29.8143 23.5122 29.8477 23.3945 29.9112 23.292C29.9747 23.1895 30.0658 23.1063 30.1744 23.0516C30.283 22.9969 30.4049 22.9729 30.5266 22.9822C30.6482 22.9915 30.7649 23.0337 30.8636 23.1042L48.9011 36.0044C48.9863 36.0637 49.0558 36.1422 49.1038 36.2334C49.1518 36.3245 49.1768 36.4257 49.1768 36.5284C49.1768 36.631 49.1518 36.7322 49.1038 36.8234C49.0558 36.9145 48.9863 36.993 48.9011 37.0523Z"
                  fill="#EF7C00"
                />
              </svg>
            </div>
          </div>
          <p>
            Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
            сегодняшний день является ведущей компанией по производству
            ламинатных и экструзионных туб. <br />
            <br /> Имея две технологии – для производства ламинатных и
            экструзионных туб, мы предлагаем вам широкий спектр возможностей.
            Большим преимуществом является собственный печатный цех в ламинате и
            in-line печать в экструзии с возможностью различных дополнительных
            опций декора. Особое внимание уделяется работе с поставщиками для
            контроля и поддержания качества производимой нами продукции. <br />
            <br /> С января 2018 года компания стала членом Европейской
            Ассоциации производителей туб (ETMA), что подтверждает сильную
            позицию бренда и на рынке Европы.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeanVideo;

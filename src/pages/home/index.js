import React, { useEffect, useState } from "react";

import AboutSection from "../../components/aboutSection";
import AboutTwo from "../../components/aboutTwo";
import Download from "../../components/download";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroSection from "../../components/heroSection";
import PillarsSection from "../../components/pillerSection";
import ProductChampsVers from "../../components/productChampVers";
import ProductChampsVersIOT from "../../components/productChampsVersIOT";
import ProductInventCare from "../../components/productInventcare";
import Subscribe from "../../components/subscribe";

const MainPage = () => {
  const [screenType, setScreenType] = useState("desktop");
  console.log("screenType===>", screenType);
  const MobileComponent = () => {
    return (
      <div className="main-container">
        <div className="flex-row-e">
          <div className="logo-crypto-template">
            <div className="logo-crypto-template-1">
              <div className="logo-crypto-template-2">
                <div className="header-logo">
                  <div className="logo">
                    <div className="group" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="div" />
          </div>
        </div>
        <div className="innovating-for-better-lives">
          <span className="innovating">Innovating</span>
          <span className="for-better-lives"> for Better Lives</span>
        </div>
        <span className="empowering-productivity-fostering-creativity-enhancing-safety">
          Empowering Productivity | Fostering Creativity | Enhancing Safety
        </span>
        <div className="button">
          <span className="lets-start">Let’s Start</span>
        </div>
        <div className="apple-computers" />
        <div className="download-app">
          <div className="heading">
            <span className="shaping-a-smarter-world-through-innovation">
              Shaping a Smarter World Through Innovation
            </span>
            <span className="at-inventcare-we-specialize">
              At InventCare, we specialize in designing products that make life
              better. Whether it's a cutting-edge productivity app, an IoT-based
              toy that sparks creativity in children, or a safety solution that
              gives peace of mind to families, our focus is always on you. We
              are inventors, creators, and dreamers united by a singular goal to
              bring holistic solutions to everyday challenges.
            </span>
          </div>
          <div className="group-3" />
        </div>
        <div className="heading-4">
          <span className="our-pillars-of-innovation">
            Our Pillars of Innovation
          </span>
          <span className="driving-meaningful-progress-transformative-solutions">
            Driving meaningful progress and transformative solutions for a
            better future.
          </span>
        </div>
        <div className="blog-card-mobile">
          <div className="div-5">
            <div className="image-blog-crypto-template-p" />
          </div>
          <div className="div-6">
            <span className="productivity">Productivity</span>
          </div>
          <div className="div-7">
            <span className="simplifying-tasks-amplifying-impact">
              Simplifying tasks and amplifying impact through intelligent tools
              streamlines processes, boosts efficiency, and reduces errors. By
              automating routine tasks, we free up time for more valuable work,
              leading to greater productivity and impactful results.
            </span>
          </div>
        </div>
        <div className="blog-card-mobile-8">
          <div className="div-9">
            <div className="image-blog-crypto-template-p-a" />
          </div>
          <div className="div-b">
            <span className="learning">Learning</span>
          </div>
          <div className="div-c">
            <span className="creating-platforms-foster-engagement">
              Creating platforms that foster engagement through interactive
              features and personalized learning, making education accessible.
              These platforms break down barriers, offering flexible learning
              opportunities and empowering learners to achieve potential.
            </span>
          </div>
        </div>
        <div className="blog-card-mobile-d">
          <div className="div-e">
            <div className="image-blog-crypto-template-p-f" />
          </div>
          <div className="div-10">
            <span className="creativity">Creativity</span>
          </div>
          <div className="div-11">
            <span className="encouraging-self-expression">
              Encouraging self-expression through innovative products that
              inspire creativity and innovation. Our designs empower individuals
              of all ages to explore their unique talents. From children to
              adults, we provide tools that help bring imagination and dreams to
              life.
            </span>
          </div>
        </div>
        <div className="blog-card-mobile-12">
          <div className="div-13">
            <div className="image-blog-crypto-template" />
          </div>
          <div className="div-14">
            <span className="safety">safety</span>
          </div>
          <div className="div-15">
            <span className="well-being-safety-solutions">
              Prioritizing well-being with thoughtful, effective safety
              solutions for peace of mind.We create products that safeguard
              families, offering protection in digital spaces. Every solution is
              designed to ensure security and enhance confidence.
            </span>
          </div>
        </div>
        <div className="download-app-16">
          <div className="inventcare-products">
            <span className="at">At</span>
            <span className="inventcare"> </span>
            <span className="creating-products">Inventcare, </span>
            <span className="at-17">
              we are committed to creating products that
            </span>
          </div>
          <div className="group-18">
            <div className="div-19">
              <div className="icon-spec-crypto-template">
                <div className="icon-spec-crypto-template-1a" />
              </div>
            </div>
            <span className="boost-productivity">Boost Productivity</span>
            <span className="empowering-tools">
              {" "}
              Empowering you to achieve more with smart, intuitive tools.
            </span>
          </div>
          <div className="group-1b">
            <div className="div-1c">
              <div className="icon-spec-crypto-template-1d">
                <div className="icon-spec-crypto-template-1e" />
              </div>
            </div>
            <span className="foster-creativity">Foster Creativity</span>
            <span className="unlocking-potential">
              Unlocking your potential to explore, learn, imagine, and innovate.
            </span>
          </div>
          <div className="group-1f">
            <div className="div-20">
              <div className="icon-spec-crypto-template-21">
                <div className="icon-spec-crypto-template-22" />
              </div>
            </div>
            <span className="track-progress">Track Progress</span>
            <span className="helping-measure-growth">
              Helping you measure growth and celebrate achievements.
            </span>
          </div>
          <div className="group-23">
            <div className="div-24">
              <div className="icon-spec-crypto-template-25">
                <div className="icon-spec-crypto-template-26" />
              </div>
            </div>
            <span className="ensure-safety">Ensure Safety</span>
            <span className="keeping-secure">
              Keeping you and your loved ones secure, both online and offline.
            </span>
          </div>
          <div className="group-27">
            <div className="div-28">
              <div className="icon-spec-crypto-template-29">
                <div className="icon-spec-crypto-template-2a" />
              </div>
            </div>
            <span className="quality-digital-life">
              Quality of Digital Life
            </span>
            <span className="balanced-technology-use">
              Encouraging balanced technology use for a better digital life.
            </span>
          </div>
          <div className="group-2b">
            <div className="group-2c" />
          </div>
        </div>
        <div className="rectangle">
          <span className="products">PRODUCTS</span>
        </div>
        <span className="champsverse">Champsverse</span>
        <span className="transforming-learning">
          Transforming learning into a fun, rewarding experience while ensuring
          a child's well-being in a safe, positive environment.
        </span>
        <div className="div-2d">
          <div className="div-2e">
            <div className="student-center" />
          </div>
          <span className="learn-grow">learn & grow</span>
          <span className="safe-fun-space">
            A safe, fun space where kids learn, grow, and flourish with engaging
            rewards and positive guidance.
          </span>
        </div>
        <div className="div-2f">
          <div className="div-30">
            <div className="safety-care" />
          </div>
          <span className="safety-well-being">Safety & Well-Being</span>
          <span className="safe-digital-space">
            A safe digital space that protects young minds, inspires learning,
            and supports growth.
          </span>
        </div>
        <div className="ios">
          <span className="ios-android-app">iOS & Android App</span>
          <span className="android-ios-platforms">
            Accessible on both Android and iOS platforms, offering seamless
            functionality across devices.
          </span>
          <div className="iphones">
            <div className="div-31" />
            <div className="screen-replace-here" />
            <div className="dinamy-island" />
            <div className="buttons">
              <div className="flex-column-c">
                <div className="silence-button" />
                <div className="section-e" />
                <div className="wrapper-12" />
              </div>
              <div className="power-button" />
            </div>
          </div>
        </div>
        <div className="div-32">
          <div className="div-33">
            <div className="bright-mind" />
          </div>
          <span className="creativity-34">creativity</span>
          <span className="young-artists-express">
            Young artists express bold, fresh ideas, exploring new styles and
            pushing creative boundaries.
          </span>
        </div>
        <div className="div-35">
          <div className="div-36">
            <div className="eaeefba-icon-section-about-crypto-template" />
            <div className="guardian" />
          </div>
          <span className="parental-tools">Parental tools</span>
          <span className="easy-to-use-features">
            Easy-to-use features to help parents monitor and guide their child's
            online activities and experiences.
          </span>
        </div>
        <span className="champsverse-iot">Champsverse (iOT)</span>
        <span className="revolutionizing-childrens-play">
          Revolutionizing children's play with innovative, interactive toys that
          enhance focus and reduce online time.
        </span>
        <div className="div-37">
          <div className="div-38">
            <div className="fast-forward" />
          </div>
          <span className="next-gen-toy-design">Next-Gen Toy Design</span>
          <span className="developing-cutting-edge">
            Developing cutting-edge toys that integrate IoT technology for a
            smarter playtime experience.
          </span>
        </div>
        <div className="div-39">
          <div className="div-3a">
            <div className="ping-pong" />
          </div>
          <span className="engaging-fun-games">Engaging and Fun Games</span>
          <span className="creating-interactive-games">
            Creating interactive games that captivate children's attention,
            fostering focus and engagement.
          </span>
        </div>
        <div className="ios-3b" />
        <div className="div-3c">
          <div className="div-3d">
            <div className="internet" />
          </div>
          <span className="reduced-online-time">Reduced Online Time</span>
          <span className="offline-entertainment-options">
            Providing offline entertainment options to help reduce excessive
            screen time for kids.
          </span>
        </div>
        <div className="div-3e">
          <div className="div-3f">
            <div className="development-skill" />
          </div>
          <span className="enhanced-development">Enhanced Development</span>
          <span className="interactive-gaming-experiences">
            Boosting mental and physical abilities through fun and interactive
            gaming experiences.
          </span>
        </div>
        <span className="inventcare-safety-solutions">
          Inventcare Safety solutions
        </span>
        <span className="innovative-safety-solutions">
          Providing families with peace of mind through innovative safety
          solutions.
        </span>
        <div className="div-40">
          <div className="div-41">
            <div className="protect" />
          </div>
          <span className="ensuring-safety">Ensuring Safety</span>
          <span className="well-being-security">
            Prioritizing the well-being and security of every individuals in all
            environments.
          </span>
        </div>
        <div className="div-42">
          <div className="div-43">
            <div className="eaefefbb-icon-section-about-crypto-template">
              <div className="private-wall-mount-camera" />
            </div>
          </div>
          <span className="advanced-technology">Advanced Technology</span>
          <span className="safety-convenience">
            Leveraging the latest technology to enhance safety and convenience
            in daily life.
          </span>
        </div>
        <div className="ios-44" />
        <div className="div-45">
          <div className="div-46">
            <div className="processor" />
          </div>
          <span className="surveillance">Surveillance</span>
          <span className="awareness-protection">
            Maintaining constant awareness and protection to safeguard against
            potential risks.
          </span>
        </div>
        <div className="div-47">
          <div className="div-48">
            <div className="male-user" />
          </div>
          <span className="user-friendly-access">User-Friendly Access</span>
          <span className="intuitive-solutions">
            Creating intuitive and user-friendly solutions designed to be
            accessible and easy to use for all individuals
          </span>
        </div>
        <span className="download-champsverse">Download Champsverse</span>
        <span className="lorem-ipsum">
          Accessible on both Android and iOS platforms, offering seamless
          functionality across devices.
        </span>
        <div className="ios-49">
          <span className="download-for-ios">Download for iOS</span>
          <div className="ios-4a">
            <div className="eaeeeefbdc-icon-app-crypto-template">
              <div className="eaeeeefbdc-icon-app-crypto-template-4b" />
            </div>
            <span className="download-app-4c">App Store</span>
          </div>
          <div className="iphones-4d">
            <div className="body" />
            <div className="screen-replace-here-4e" />
            <div className="dinamy-island-4f" />
            <div className="buttons-50">
              <div className="silence-button-51" />
              <div className="flex-column-a">
                <div className="plus-button" />
                <div className="button-52" />
              </div>
              <div className="power-button-53" />
            </div>
          </div>
        </div>
        <div className="android">
          <span className="download-android">Download for Android</span>
          <div className="button-54">
            <div className="icon-app-crypto">
              <div className="icon-app-crypto-55" />
            </div>
            <span className="play-store">PLAY STORE</span>
          </div>
          <div className="samsung-galaxys" />
        </div>
        <div className="frame">
          <div className="div-56">
            <div className="icon-newsletter-crypto">
              <div className="icon-newsletter-crypto-57" />
            </div>
          </div>
          <span className="share-email">
            Please share your email, and our team will reach out shortly.
          </span>
          <div className="input-email">
            <span className="enter-email-address">Enter email address</span>
          </div>
          <div className="button-58">
            <span className="button-59">Share</span>
          </div>
        </div>
        <div className="footer-mobile">
          <div className="group-5a">
            <div className="flex-row-dce">
              <div className="div-5b">
                <span className="menu-5c">Menu</span>
              </div>
              <div className="div-5d" />
            </div>
            <div className="flex-row">
              <span className="home">Home</span>
              <span className="mission">mission</span>
            </div>
            <div className="flex-row-cf">
              <span className="about-us">About us</span>
              <span className="products-5e">products</span>
            </div>
            <div className="flex-row-be">
              <span className="our-pillars">our pillars</span>
              <span className="contact-us">contact us</span>
            </div>
            <div className="div-5f" />
            <div className="flex-row-60">
              <span className="all-rights-reserved">All rights reserved</span>
              <div className="socials">
                <div className="insta" />
                <div className="facebook" />
                <div className="linked-in" />
              </div>
            </div>
          </div>
          <div className="logo-crypto">
            <div className="header-logo-61">
              <div className="logo-62">
                <div className="group-63" />
              </div>
            </div>
          </div>
        </div>
        <div className="mob" />
      </div>
    );
  };

  const DeskTopComponent = () => {
    return (
      <div className="main-container">
        <Header />
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <AboutTwo />
        <ProductChampsVers />
        <ProductChampsVersIOT />
        <ProductInventCare />
        <Download />
        <Subscribe />
        <Footer />
        <div className="pic-17" />
      </div>
    );
  };

  const TabComponent = () => {
    return (
      <div className="main-container">
      <div className="innovating-for-better-lives">
        <span className="innovating">Innovating</span>
        <span className="for-better-lives"> for Better Lives</span>
      </div>
      <span className="empowering-productivity">
        Empowering Productivity | Fostering Creativity | Enhancing Safety
      </span>
      <div className="button">
        <span className="lets-start">Let’s Start</span>
      </div>
      <div className="apple-computers" />
      <div className="download-app">
        <div className="heading">
          <span className="shaping-a-smarter-world">
            Shaping a Smarter World Through Innovation
          </span>
          <span className="at-inventcare">
            At InventCare, we specialize in designing products that make life
            better. Whether it's a cutting-edge productivity app, an IoT-based
            toy that sparks creativity in children, or a safety solution that
            gives peace of mind to families, our focus is always on you. We are
            inventors, creators, and dreamers united by a singular goal to bring
            holistic solutions to everyday challenges.
          </span>
        </div>
        <div className="group" />
      </div>
      <div className="heading-1">
        <span className="our-pillars-of-innovation">
          Our Pillars of Innovation
        </span>
        <span className="driving-meaningful-progress">
          Driving meaningful progress and transformative solutions for a better
          future.
        </span>
      </div>
      <div className="articles">
        <div className="blog-card-mobile">
          <div className="div">
            <div className="eaebefc-image-blog-crypto" />
          </div>
          <div className="div-2">
            <span className="productivity">Productivity</span>
          </div>
          <div className="div-3">
            <span className="simplifying-tasks">
              Simplifying tasks and amplifying impact through intelligent tools
              streamlines processes, boosts efficiency, and reduces errors. By
              automating routine tasks, we free up time for more valuable work,
              leading to greater productivity and impactful results.
            </span>
          </div>
        </div>
      </div>
      <div className="articles-4">
        <div className="blog-card-mobile-5">
          <div className="div-6">
            <div className="eaebefc-image-blog-crypto-7" />
          </div>
          <div className="div-8">
            <span className="learning">Learning</span>
          </div>
          <div className="div-9">
            <span className="creating-platforms">
              Creating platforms that foster engagement through interactive
              features and personalized learning, making education accessible.
              These platforms break down barriers, offering flexible learning
              opportunities and empowering learners to achieve potential.
            </span>
          </div>
        </div>
      </div>
      <div className="articles-a">
        <div className="blog-card-mobile-b">
          <div className="div-c">
            <div className="eaebefc-image-blog-crypto-d" />
          </div>
          <div className="div-e">
            <span className="creativity">Creativity</span>
          </div>
          <div className="div-f">
            <span className="encouraging-self-expression">
              Encouraging self-expression through innovative products that
              inspire creativity and innovation. Our designs empower individuals
              of all ages to explore their unique talents. From children to
              adults, we provide tools that help bring imagination and dreams to
              life.
            </span>
          </div>
        </div>
      </div>
      <div className="articles-10">
        <div className="blog-card-mobile-11">
          <div className="div-12">
            <div className="eaebefc-image-blog-crypto-13" />
          </div>
          <div className="div-14">
            <span className="safety">safety</span>
          </div>
          <div className="div-15">
            <span className="prioritizing-well-being">
              Prioritizing well-being with thoughtful, effective safety
              solutions for peace of mind.We create products that safeguard
              families, offering protection in digital spaces. Every solution is
              designed to ensure security and enhance confidence.
            </span>
          </div>
        </div>
      </div>
      <div className="download-app-16">
        <div className="create-products">
          <span className="at">At</span>
          <span className="inventcare"> </span>
          <span className="committed-products">Inventcare, </span>
          <span className="at-17">
            we are committed to creating products that
          </span>
        </div>
        <div className="frame">
          <div className="flex-row-cdf">
            <div className="group-18">
              <div className="div-19">
                <div className="icon-spec-crypto">
                  <div className="icon-spec-crypto-1a" />
                </div>
              </div>
              <span className="boost-productivity">Boost Productivity</span>
              <span className="empowering-tools">
                {" "}
                Empowering you to achieve more with smart, intuitive tools.
              </span>
            </div>
            <div className="group-1b">
              <div className="div-1c">
                <div className="icon-spec-crypto-1d">
                  <div className="icon-spec-crypto-1e" />
                </div>
              </div>
              <span className="foster-creativity">Foster Creativity</span>
              <span className="unlocking-potential">
                Unlocking your potential to explore, learn, imagine, and
                innovate.
              </span>
            </div>
          </div>
          <div className="flex-row-da">
            <div className="group-1f">
              <div className="div-20">
                <div className="icon-spec-crypto-21">
                  <div className="icon-spec-crypto-22" />
                </div>
              </div>
              <span className="track-progress">Track Progress</span>
              <span className="measure-achievements">
                Helping you measure growth and celebrate achievements.
              </span>
            </div>
            <div className="group-23">
              <div className="div-24">
                <div className="icon-spec-crypto-25">
                  <div className="icon-spec-crypto-26" />
                </div>
              </div>
              <span className="ensure-safety">Ensure Safety</span>
              <span className="secure-loved-ones">
                Keeping you and your loved ones secure, both online and offline.
              </span>
            </div>
          </div>
          <div className="group-27">
            <div className="div-28">
              <div className="icon-spec-crypto-29">
                <div className="icon-spec-crypto-2a" />
              </div>
            </div>
            <span className="quality-digital-life">
              Quality of Digital Life
            </span>
            <span className="balanced-technology-use">
              Encouraging balanced technology use for a better digital life.
            </span>
          </div>
        </div>
        <div className="group-2b">
          <div className="group-2c" />
        </div>
      </div>
      <div className="rectangle">
        <span className="products">PRODUCTS</span>
      </div>
      <span className="champsverse">Champsverse</span>
      <span className="transforming-learning">
        Transforming learning into a fun, rewarding experience while ensuring a
        child's well-being in a safe, positive environment.
      </span>
      <div className="div-2d">
        <div className="div-2e">
          <div className="student-center" />
        </div>
        <span className="learn-grow">learn & grow</span>
        <span className="safe-fun-space">
          A safe, fun space where kids learn, grow, and flourish with engaging
          rewards and positive guidance.
        </span>
      </div>
      <div className="div-2f">
        <div className="div-30">
          <div className="safety-care" />
        </div>
        <span className="safety-well-being">Safety & Well-Being</span>
        <span className="safe-digital-space">
          A safe digital space that protects young minds, inspires learning, and
          supports growth.
        </span>
      </div>
      <div className="ios">
        <span className="ios-android-app">iOS & Android App</span>
        <span className="accessible-platforms">
          Accessible on both Android and iOS platforms, offering seamless
          functionality across devices.
        </span>
        <div className="iphones">
          <div className="body" />
          <div className="screen-replace-here" />
          <div className="dinamy-island" />
          <div className="buttons">
            <div className="flex-column-f">
              <div className="silence-button" />
              <div className="group-12" />
              <div className="box-12" />
            </div>
            <div className="power-button" />
          </div>
        </div>
      </div>
      <div className="div-31">
        <div className="div-32">
          <div className="bright-mind" />
        </div>
        <span className="creativity-33">creativity</span>
        <span className="young-artists">
          Young artists express bold, fresh ideas, exploring new styles and
          pushing creative boundaries.
        </span>
      </div>
      <div className="div-34">
        <div className="div-35">
          <div className="eaeefba-icon-section-about-crypto-template" />
          <div className="guardian" />
        </div>
        <span className="parental-tools">Parental tools</span>
        <span className="easy-to-use-features">
          Easy-to-use features to help parents monitor and guide their child's
          online activities and experiences.
        </span>
      </div>
      <span className="champsverse-iot">Champsverse (iOT)</span>
      <span className="revolutionizing-play">
        Revolutionizing children's play with innovative, interactive toys that
        enhance focus and reduce online time.
      </span>
      <div className="div-36">
        <div className="div-37">
          <div className="fast-forward" />
        </div>
        <span className="next-gen-toy-design">Next-Gen Toy Design</span>
        <span className="iot-technology">
          Developing cutting-edge toys that integrate IoT technology for a
          smarter playtime experience.
        </span>
      </div>
      <div className="div-38">
        <div className="div-39">
          <div className="ping-pong" />
        </div>
        <span className="engaging-fun-games">Engaging and Fun Games</span>
        <span className="interactive-games">
          Creating interactive games that captivate children's attention,
          fostering focus and engagement.
        </span>
      </div>
      <div className="ios-3a" />
      <div className="div-3b">
        <div className="div-3c">
          <div className="internet" />
        </div>
        <span className="reduced-online-time">Reduced Online Time</span>
        <span className="offline-entertainment-options">
          Providing offline entertainment options to help reduce excessive
          screen time for kids.
        </span>
      </div>
      <div className="div-3d">
        <div className="div-3e">
          <div className="development-skill" />
        </div>
        <span className="enhanced-development">Enhanced Development</span>
        <span className="boosting-mental-physical">
          Boosting mental and physical abilities through fun and interactive
          gaming experiences.
        </span>
      </div>
      <span className="inventcare-safety">Inventcare Safety solutions</span>
      <span className="innovative-safety-solutions">
        Providing families with peace of mind through innovative safety
        solutions.
      </span>
      <div className="div-3f">
        <div className="div-40">
          <div className="protect" />
        </div>
        <span className="ensuring-safety">Ensuring Safety</span>
        <span className="well-being-security">
          Prioritizing the well-being and security of every individuals in all
          environments.
        </span>
      </div>
      <div className="div-41">
        <div className="div-42">
          <div className="eaefefbb-icon-section-about-crypto-template">
            <div className="private-wall-mount-camera" />
          </div>
        </div>
        <span className="advanced-technology">Advanced Technology</span>
        <span className="safety-convenience">
          Leveraging the latest technology to enhance safety and convenience in
          daily life.
        </span>
      </div>
      <div className="ios-43" />
      <div className="div-44">
        <div className="div-45">
          <div className="processor" />
        </div>
        <span className="surveillance">Surveillance</span>
        <span className="awareness-protection">
          Maintaining constant awareness and protection to safeguard against
          potential risks.
        </span>
      </div>
      <div className="div-46">
        <div className="div-47">
          <div className="male-user" />
        </div>
        <span className="user-friendly-access">User-Friendly Access</span>
        <span className="intuitive-user-friendly">
          Creating intuitive and user-friendly solutions designed to be
          accessible and easy to use for all individuals
        </span>
      </div>
      <span className="download-champsverse">Download Champsverse</span>
      <span className="android-ios-functionality">
        Accessible on both Android and iOS platforms, offering seamless
        functionality across devices.
      </span>
      <div className="ios-48">
        <span className="download-for-ios">Download for iOS</span>
        <div className="ios-49">
          <div className="eaeeeefbdc-icon-app-crypto-template">
            <div className="eaeeeefbdc-icon-app-crypto-template-4a" />
          </div>
          <span className="app-store">App Store</span>
        </div>
        <div className="iphones-4b">
          <div className="body-4c" />
          <div className="screen-replace-here-4d" />
          <div className="dinamy-island-4e" />
          <div className="buttons-4f">
            <div className="silence-button-50" />
            <div className="flex-column-e">
              <div className="plus-button" />
              <div className="plus-button-51" />
            </div>
            <div className="power-button-52" />
          </div>
        </div>
      </div>
      <div className="android">
        <span className="download-for-android">Download for Android</span>
        <div className="button-53">
          <div className="eaeedefbe-icon-app-crypto-template">
            <div className="icon-app-crypto" />
          </div>
          <span className="play-store">PLAY STORE</span>
        </div>
        <div className="samsung-galaxys" />
      </div>
      <div className="frame-54">
        <div className="div-55">
          <div className="icon-newsletter-crypto">
            <div className="icon-newsletter-crypto-56" />
          </div>
        </div>
        <span className="share-email">
          Please share your email, and our team will reach out shortly.
        </span>
        <div className="input-email">
          <span className="enter-email-address">Enter email address</span>
        </div>
        <div className="button-57">
          <span className="button-share">Share</span>
        </div>
      </div>
      <div className="footer-mobile">
        <div className="group-58">
          <span className="menu">Menu</span>
          <div className="div-59" />
          <div className="flex-row-f">
            <span className="home">Home</span>
            <span className="mission">mission</span>
          </div>
          <div className="flex-row-e">
            <span className="about-us">About us</span>
            <span className="products-5a">products</span>
          </div>
          <div className="flex-row-ad">
            <span className="our-pillars">our pillars</span>
            <span className="contact-us">contact us</span>
          </div>
          <div className="div-5b" />
          <div className="flex-row-a">
            <span className="all-rights-reserved">All rights reserved</span>
            <div className="socials">
              <div className="insta" />
              <div className="facebook" />
              <div className="linked-in" />
            </div>
          </div>
        </div>
        <div className="logo-crypto">
          <div className="header-logo">
            <div className="logo">
              <div className="group-5c" />
            </div>
          </div>
        </div>
      </div>
      <div className="pic-18" />
      <div className="logo-crypto-5d">
        <div className="logo-crypto-5e">
          <div className="logo-crypto-5f">
            <div className="header-logo-60">
              <div className="logo-61">
                <div className="group-62" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-63">
        <div className="div-64" />
      </div>
    </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log("width==>", width);
      if (width < 426) {
        setScreenType("mobile");
      } else if (width > 1024) {
        setScreenType("desktop");
      } else {
        setScreenType("tablet");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  if (screenType === "mobile") {
    return <MobileComponent />;
  }

  if (screenType === "tablet") {
    return <TabComponent />;
  }

  return <DeskTopComponent />;
};

export default MainPage;

import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Layout from '../components/layout/';
import PrismicLogo from '../components/PrismicLogo';
import OverlayModel from '../components/overlayModel';
import ThreeDOverlay from '../components/threeDOverlay';
import Wrapper from '../components/wrapper';
import EmptyOverlayModel from '../components/emptyOverlayModel';
import Metadata from '../components/metadata';
import LeftMenu from '../components/menu/leftMenu';
import RightMenu from '../components/menu/rightMenu';
import LogoDesc from '../components/LogoDesc';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import DegreeOverlay from '../components/DegreeOverlay';
//flex controls components
import ThreeDModelComponent from '../components/flexControls/ThreeDModelComponent';
import IFrameComponent from '../components/flexControls/IFrameComponent';
import PdfComponent from '../components/flexControls/PdfComponent';
import PhotoComponent from '../components/flexControls/PhotoComponent';
import VideoComponent from '../components/flexControls/VideoComponent';
import WebsiteComponent from '../components/flexControls/WebsiteComponent';
import ThreeSixtyCarouselComponent from '../components/flexControls/ThreeSixtyCarouselComponent';
import FiftyFiftyComponent from '../components/flexControls/FiftyFiftyComponent';

//Flex Control Overlay Components to kick the journey
import PDFSlider from '../components/PDFSlider';

import '../globalStyles.css';
import '../portret.css';
import '../socialIcons.css';
import '../hamburgers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as constants from '../utils/constants';
import getFuncIcon from '../utils/funcIconUtils';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {
    getWebsiteHeaderData,
    getSocialUrls,
    getMenuData,
    getWebsiteMeta,
    showRightMenu,
    menuStyle,
    getSliderData,
    getVideoSliderData,
    getPDFData,
    getTopRightData,
    getIFrameData,
    getWebsiteData,
    getFuncIcons,
} from '../utils/index'

const FooterLine = styled.img`
    left: 5%;
    bottom: 7%;
    width: 78%;
    height: 0.3%;
    position: absolute;
    outline: none;
    @media (orientation: portrait) {
        bottom: 8%;
        width: 70%;
    }
`;

export default function Home(props) {
    const { data } = props;
    const funcIcons = getFuncIcons(data);
    const websiteHeaderData = getWebsiteHeaderData(data);
    const iframeData = getIFrameData(data);
    const socialURLs = getSocialUrls(data);
    const menuData = getMenuData(data);
    const websiteMeta = getWebsiteMeta(data);
    const topRightData = getTopRightData(data);
    const [open, setOpen] = useState(false);

    const [openIframeOverlay, setIFrameOverlay] = useState(false);
    const [openPdfOverlay, setPdfOverlay] = useState(false);
    const [openPhotoOverlay, setPhotoOverlay] = useState(false);
    const [threeDModelOverlay, setThreeDModelOverlay] = useState(false);
    const [openVideOverlay, setVideoOverlay] = useState(false);
    const [websiteOverlay, setWebsiteOverlay] = useState(false);
    const [threeSixtyCarousel, setThreeSixtyCarousel] = useState(false);
    const [fiftyFifty, setFiftyFifty] = useState(false);
    const [clickIndex, setClickIndex] = useState();
    const [showEmptyOverlay, setShowEmptyOverlay] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    setTimeout(()=> setDataLoaded(true), 1000);
    switch (dataLoaded) {
        case false:
            return (
                <Loader
                    type="Grid"
                    color="black"
                    height={100}
                    width={100}
                    visible={!dataLoaded}
                    className="loader"
                />
            );
        default:
            return (
                <>
                    <Layout>
                        <Metadata websiteMeta={websiteMeta} uid={data.prismicBlogpost.uid} />
                        <Wrapper bgurl={websiteHeaderData.backgroundImage}>
                            {!open && (
                                <LeftMenu
                                    src={menuData.menu_left_icon.url}
                                    type="image"
                                    style={menuStyle(menuData, 'left')}
                                    onClick={() => setOpen(!open)}
                                    bgColor={menuData.menu_left_icon_bgcolor}
                                />
                            )}
                            {showRightMenu(menuData) && !showEmptyOverlay && !open && (
                                <RightMenu
                                    src={menuData.menu_right_icon.url}
                                    type="image"
                                    style={menuStyle(menuData, 'right')}
                                    onClick={() => setShowEmptyOverlay(!showEmptyOverlay)}
                                    bgColor={menuData.menu_right_icon_bg_color}
                                />
                            )}
                            <LogoDesc
                                logo={websiteHeaderData.logoImage}
                                desc={websiteHeaderData.logoDescription}
                                fontName={websiteHeaderData.fontName}
                            />
                            <div className="controlFlex">
                                {websiteHeaderData.enabledChoices.map((choice, index) => {
                                    const { PDF, PHOTO_GALLERY, VIDEO_GALLERY, WEBSITE } = constants;
                                    switch (choice) {
                                        case PDF:
                                            return (
                                                <PdfComponent
                                                    src={getFuncIcon(funcIcons, index)}
                                                    key={index}
                                                    type="image"
                                                    className="box"
                                                    onClick={() => {
                                                        setClickIndex(index);
                                                        setPdfOverlay(!openPdfOverlay);
                                                    }}
                                                />
                                            );
                                        case PHOTO_GALLERY:
                                            return (
                                                <PhotoComponent
                                                    src={getFuncIcon(funcIcons, index)}
                                                    key={index}
                                                    type="image"
                                                    value=""
                                                    className="box"
                                                    onClick={() => {
                                                        setClickIndex(index);
                                                        setPhotoOverlay(!openPhotoOverlay);
                                                    }}
                                                />
                                            );
                                        case VIDEO_GALLERY:
                                            return (
                                                <VideoComponent
                                                    src={getFuncIcon(funcIcons, index)}
                                                    type="image"
                                                    key={index}
                                                    value=""
                                                    className="box"
                                                    onClick={() => {
                                                        setClickIndex(index);
                                                        setVideoOverlay(!openVideOverlay);
                                                    }}
                                                />
                                            );
                                        case WEBSITE:
                                            return (
                                                <WebsiteComponent
                                                    src={getFuncIcon(funcIcons, index)}
                                                    key={index}
                                                    type="image"
                                                    value=""
                                                    className="box"
                                                    onClick={() => {
                                                        setClickIndex(index);
                                                        setWebsiteOverlay(!websiteOverlay);
                                                    }}
                                                />
                                            );
                                        case constants.IFRAME:
                                            return (
                                                <IFrameComponent
                                                    src={getFuncIcon(funcIcons, index)}
                                                    type="image"
                                                    value=""
                                                    key={index}
                                                    className="box"
                                                    onClick={() => {
                                                        setClickIndex(index);
                                                        setIFrameOverlay(!openIframeOverlay);
                                                    }}
                                                />
                                            );
                                        case constants.THREE_D_MODEL:
                                            return (
                                                <ThreeDModelComponent
                                                    src={getFuncIcon(funcIcons, index)}
                                                    key={index}
                                                    type="image"
                                                    className="box"
                                                    onClick={() => {
                                                        setClickIndex(index);
                                                        setThreeDModelOverlay(!threeDModelOverlay);
                                                    }}
                                                />
                                            );
                                        case constants.THREE_D_CAROUSEL:
                                            return (
                                                <ThreeSixtyCarouselComponent
                                                    src={getFuncIcon(funcIcons, index)}
                                                    key={index}
                                                    type="image"
                                                    value=""
                                                    className="box"
                                                    onClick={() => {
                                                        setClickIndex(index);
                                                        setThreeSixtyCarousel(!threeSixtyCarousel);
                                                    }}
                                                />
                                            );
                                        case constants.FIFTY_FIFTY:
                                            return (
                                                <FiftyFiftyComponent
                                                    src={getFuncIcon(funcIcons, index)}
                                                    key={index}
                                                    type="image"
                                                    value=""
                                                    className="box"
                                                    onClick={() => {
                                                        setClickIndex(index);
                                                        setFiftyFifty(!fiftyFifty);
                                                    }}
                                                />
                                            );
                                    }
                                })}
                            </div>
                            <PrismicLogo
                                src={websiteHeaderData.footerImage}
                                type="image"
                                value=""
                                onClick={() => window.open(websiteHeaderData.footerLink)}
                            />
                            <FooterLine src={websiteHeaderData.footerLineImage} />
                        </Wrapper>

                        {/* open left Overlay */}
                        {open && <OverlayModel removeOverlay={() => setOpen(!open)} socialURLs={socialURLs} />}

                        {/* open right Overlay */}
                        {showEmptyOverlay && (
                            <EmptyOverlayModel
                                topRightData={topRightData}
                                removeOverlay={() => setShowEmptyOverlay(!showEmptyOverlay)}
                            />
                        )}
                        {/* 1 open Photo Gallery overlay */}
                        {openPhotoOverlay && (
                            <Gallery
                                removeOverlay={() => {
                                    setPhotoOverlay(!openPhotoOverlay);
                                }}
                                brochureImages={getSliderData(data, clickIndex)}
                            />
                        )}

                        {/* 2 open 360 - three D Model - IFRAME  -- virtual tour*/}
                        {openIframeOverlay && (
                            <ThreeDOverlay
                                data={iframeData}
                                removeOverlay={() => setIFrameOverlay(!openIframeOverlay)}
                            />
                        )}
                        {/* 3 open video overlay */}
                        {openVideOverlay && (
                            <VideoGallery
                                videoData={getVideoSliderData(data)}
                                removeOverlay={() => setVideoOverlay(!openVideOverlay)}
                            />
                        )}
                        {/* 4 open pdf overlay */}
                        {openPdfOverlay && (
                            <PDFSlider
                                pdfDataFromSlider={getPDFData(data, clickIndex)}
                                removeOverlay={() => setPdfOverlay(!openPdfOverlay)}
                            />
                        )}

                        {/* 5 Website */}
                        {websiteOverlay && (
                            <DegreeOverlay
                                data={getWebsiteData(data, clickIndex)}
                                removeOverlay={() => setWebsiteOverlay(!websiteOverlay)}
                            />
                        )}
                        {/* {openPdfOverlay && <PdfCarousel pdfSlice={pdfSlice} documents={pdfDocuments} removeOverlay={() => setPdfOverlay(!openPdfOverlay)} />} */}
                    </Layout>
                </>
            );
    }
}

export const pageQuery = graphql`
    query($uid: String) {
        prismicBlogpost(uid: { eq: $uid }) {
            uid
            data {
                functionality_choice_1
                functionality_choice_2
                functionality_choice_3
                functionality_choice_4
                functionality_choice_5
                functionality_choice_6
                website_main_logo {
                    alt
                    url
                }
                name {
                    html
                    text
                }
                website_background_image {
                    alt
                    url
                }
                footer_line_image {
                    alt
                    url
                }
                footer_image {
                    alt
                    url
                }
                footer_image_url {
                    url
                }
                logo_description {
                    text
                }
                font_name
                body {
                    ... on PrismicBlogpostBodyPdf {
                        slice_type
                        items {
                            slide_image {
                                alt
                                copyright
                                url
                            }
                            pdf {
                                url
                            }
                            slide_caption
                            __typename
                        }
                        primary {
                            functionality_position_index {
                                text
                                html
                                raw
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyIframe {
                        slice_type
                        primary {
                            embed_url {
                                embed_url
                                html
                            }
                            move_the_x_to_the_left
                        }
                        slice_label
                        slice_type
                    }
                    ... on PrismicBlogpostBodyTopRight {
                        slice_type
                        items {
                            slide_image {
                                alt
                                copyright
                                url
                            }
                            slide_url {
                                url
                            }
                            slide_caption
                            __typename
                        }
                    }
                    ... on PrismicBlogpostBody3dModelInternal {
                        slice_type
                        items {
                            add_3d_model {
                                url
                            }
                            model_thumbnail {
                                url
                            }
                            title_under_thumbnail {
                                text
                            }
                            __typename
                        }
                    }
                    ... on PrismicBlogpostBodySocial {
                        primary {
                            instagram_url {
                                url
                            }
                            instagram_icon {
                                url
                                alt
                            }
                            facebook_url {
                                url
                            }
                            facebook_icon {
                                url
                                alt
                            }
                            linkedin_url {
                                url
                            }
                            linked_in_icon {
                                url
                                alt
                            }
                            whatsapp_url {
                                url
                            }
                            whatsapp_icon {
                                url
                                alt
                            }
                            mail_url {
                                url
                            }
                            mail_icon {
                                url
                            }
                            phone_number {
                                text
                            }
                            phone_icon {
                                url
                            }
                            location_url {
                                url
                            }
                            location_icon {
                                url
                            }
                            website_url {
                                url
                            }
                            website_icon {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyMenu {
                        primary {
                            show_right_menu
                            menu_left_icon {
                                url
                            }
                            menu_left_icon_bgcolor
                            menu_right_icon_bg_color
                            menu_right_icon {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyWebsitemeta {
                        primary {
                            title {
                                text
                            }
                            description {
                                text
                            }
                            meta_link_share_image {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodySlider {
                        slice_type
                        items {
                            slide_image {
                                alt
                                copyright
                                url
                            }
                            slide_description {
                                html
                                text
                                raw
                            }
                            slide_caption
                            __typename
                        }
                        primary {
                            functionality_position_index {
                                text
                                html
                                raw
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyWebsiteAdd {
                        id
                        primary {
                            move_the_x_to_the_left
                            functionality_position_index {
                                text
                                html
                                raw
                            }
                        }
                        items {
                            website_address {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyVideo {
                        slice_type
                        items {
                            video {
                                embed_url
                                html
                            }
                            video_title {
                                text
                            }
                            __typename
                        }
                    }
                    ... on PrismicBlogpostBodyFunctionalityicons {
                        slice_type
                        items {
                            functionality_1_icon {
                                url
                            }
                            functionality_2_icon {
                                url
                            }
                            functionality_3_icon {
                                url
                            }
                            functionality_4_icon {
                                url
                            }
                            functionality_5_icon {
                                url
                            }
                            functionality_6_icon {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

import React, { useState } from 'react';
import useDeviceDetect from '../../utils/useDeviceDetect';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import * as Icon from 'react-feather';
function VideoViewer({ fileURL, closePreview }) {
    console.log(" hiiii ")
    const { isMobile } = useDeviceDetect();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }
    if (isMobile) {
        return (
            <>
                <div className="overlay">
                    
                    <Icon.X 
                        className="overlay-close pdf-viewer-item"
                        onClick={(e) => closePreview()}/>

                    <Document file={fileURL} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <div className="controls">
                        <Icon.ArrowLeftCircle
                            type="button"
                            style={{ marginRight: '15px' }}
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                        />
                        <Icon.ArrowRightCircle
                            type="button" disabled={pageNumber >= numPages} onClick={nextPage}
                        />
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <Icon.X 
                className="overlay-close pdf-viewer-item"
                onClick={(e) => closePreview()}/>

            <div className="scroll-wrapper">
                <iframe title="image" src={fileURL} frameBorder="0" allowFullScreen />
            </div>
        </>
    );
}

VideoViewer.defaultProps = {};

VideoViewer.propTypes = {};

export default VideoViewer;

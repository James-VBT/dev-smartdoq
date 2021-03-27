import React, { useState } from 'react';
import useDeviceDetect from '../../utils/useDeviceDetect';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import ArrowRightCircle from '../svg/ArrowRightCircle';
import ArrowLeftCircle from '../svg/ArrowLeftCircle';
import * as Icon from 'react-feather';
function PdfViewer({ fileURL, closePreview }) {
    const { isMobile } = useDeviceDetect();
    console.log(" is mobile ", isMobile)
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
                    className="overlay-close pdf-viewer-close" 
                    onClick={(e) => closePreview()}/>

                    <Document file={fileURL} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <div className="controls">
                        <ArrowLeftCircle
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                        />
                        <ArrowRightCircle
                            disabled={pageNumber >= numPages} onClick={nextPage}
                        />
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            
            <Icon.X className="overlay-close pdf-viewer-close" onClick={(e) => closePreview()}/>
            <div className="scroll-wrapper">
                <iframe title="image" src={fileURL} frameBorder="0" allowFullScreen />
            </div>
        </>
    );
}

PdfViewer.defaultProps = {};

PdfViewer.propTypes = {};

export default PdfViewer;
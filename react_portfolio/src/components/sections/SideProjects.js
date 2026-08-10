import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const SideProjects = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {

    const outerClasses = classNames(
        'testimonial section',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'testimonial-inner section-inner'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'Side projects',
        paragraph: ''
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-md">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />

                    <div className="container">
                        <div className="split-wrap">
                            <div className="split-item">
                                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                    <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                        CASTANYA DE VILADRAU
                                    </div>
                                    <h3 className="mt-0 mb-12">
                                        Castanya de Viladrau
                                    </h3>
                                    <p className="mb-12">
                                        Marketing website for a Montseny chestnut-producer brand, built end-to-end from design to deployment, showcasing partner restaurants, products and guided visits.
                                    </p>
                                    <Button tag="a" color="dark" wideMobile href="https://castanyadeviladrau.cat/" target="_blank" rel="noreferrer">
                                        Visit website
                                    </Button>
                                </div>
                                <div className="split-item-image center-content-mobile reveal-from-bottom" data-reveal-container=".split-item">
                                    <Image
                                        src={require('./../../assets/images/thumbnails/castanyadeviladrau.jpg').default}
                                        alt="Castanya de Viladrau"
                                        width={528}
                                        height={396} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={tilesClasses} style={{ marginTop: '80px' }}>

                        <div className="tiles-item reveal-from-left center-content" data-reveal-delay="600">
                            <Image
                                src={require('./../../assets/images/thumbnails/claudia_full.png').default}
                                alt="Claudia Pelarigo"
                                width={528}
                                height={396} />
                            <br/>
                            <Button tag="a" color="dark" wideMobile href="https://claudiapelarigo.com/" target="_blank">
                                Show Portfolio
                            </Button>
                        </div>

                        <div className="tiles-item reveal-from-left center-content" data-reveal-delay="400">
                            <Image
                                src={require('./../../assets/images/thumbnails/fridecor_full.png').default}
                                alt="Fridecor Instalacion"
                                width={528}
                                height={396} />
                            <br/>
                            <Button tag="a" color="dark" wideMobile href="https://fridecorinstalacion.com/" target="_blank">
                                Show Website
                            </Button>
                        </div>

                        <div className="tiles-item reveal-from-left center-content" data-reveal-delay="200">
                            <Image
                                src={require('./../../assets/images/thumbnails/gateando_full.png').default}
                                alt="Gateando Tattoo"
                                width={528}
                                height={396} />
                            <br/>
                            <Button tag="a" color="dark" wideMobile href="https://campossrg.github.io/" target="_blank">
                                Show Portfolio
                            </Button>
                        </div>

                        <div className="tiles-item reveal-from-left center-content">
                            <Image
                                src={require('./../../assets/images/thumbnails/gondu_full.png').default}
                                alt="Carnes Gondu"
                                width={528}
                                height={396} />
                            <br/>
                            <Button tag="a" color="dark" wideMobile href="https://carnesgondu.com/" target="_blank">
                                Show Marketplace
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

SideProjects.propTypes = propTypes;
SideProjects.defaultProps = defaultProps;

export default SideProjects;

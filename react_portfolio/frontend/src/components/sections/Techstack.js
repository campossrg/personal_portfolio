import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}
const Techstack = ({
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
        'features-tiles section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-tiles-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'Tech stack',
        paragraph: ''
    };

    return (
        <section
            {...props}
            className={outerClasses}
            >
            <div id="Techstack" className="container-md">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={tilesClasses}>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/icons/icon_05_frontend.svg').default}
                                            alt="Frontend"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Frontend
                                    </h4>
                                    <p className="m-0 text-sm">
                                        React 18 / Angular 19 / CSS3
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/icons/icon_06_backend.svg').default}
                                            alt="Backend"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Backend
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Java 17 / Kotlin / Spring Framework / Spring WebFlux / gRPC
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/icons/icon_07_databases.svg').default}
                                            alt="Databases"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Databases
                                    </h4>
                                    <p className="m-0 text-sm">
                                        PostgreSQL / Oracle / SQL Server / MongoDB
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className={tilesClasses}>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/icons/icon_08_tools.svg').default}
                                            alt="Cloud & DevOps"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Cloud &amp; DevOps
                                    </h4>
                                    <p className="m-0 text-sm">
                                        GCP / AWS / Red Hat OpenShift / GitHub Actions / Jenkins / Terraform
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/icons/icon_09_formacion.svg').default}
                                            alt="Certifications"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Certifications
                                    </h4>
                                    <p className="m-0 text-sm">
                                    <span className="text-color-secondary disable">Google</span> - Associate Cloud Engineer (2024)
                                    <br/>
                                    <span className="text-color-secondary disable">Scaled Agile</span> - Certified SAFe&reg; 6 Scrum Master (2025)
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}

Techstack.propTypes = propTypes;
Techstack.defaultProps = defaultProps;

export default Techstack;
import React from 'react';
import clsx from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useStyles from './useStyles';
import { ImageProps } from '../../interfaces/Props';

const Image = ({
    src,
    srcSet,
    alt = '...',
    lazy = true,
    lazyProps = {
        width: 'auto',
        height: 'auto',
    },
    className,
    ...rest
}: ImageProps): JSX.Element => {

    const classes = useStyles();
    if (lazy) {
        return (
            <LazyLoadImage
                className={clsx('image', classes.root, classes.dBlock, className)}
                alt={alt}
                src={src}
                srcSet={srcSet}
                effect="opacity"
                {...lazyProps}
                {...rest}
            />
        );
    }

    return (
        <img
            className={clsx('image', classes.root, className)}
            alt={alt}
            src={src}
            srcSet={srcSet}
            {...rest}
        />
    );
};

export default Image;
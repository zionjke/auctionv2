import React, { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Backdrop, Fade, Modal } from '@mui/material';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
}
export const ModalComponent:FC<ModalProps> = ({
    className, children, onClose, isOpen,
}) => {
    const onEscKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onEscKeyDown);
        };
    }, [onEscKeyDown, isOpen]);

    return (
        <Portal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isOpen}>
                    <div className={classNames(cls.content, {}, [className])}>
                        {children}
                    </div>
                </Fade>
            </Modal>
        </Portal>
    );
};

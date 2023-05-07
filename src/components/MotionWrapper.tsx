import {motion, Variants} from 'framer-motion';

interface MotionWrapperProps {
    children: React.ReactNode;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({children}) => {
    const cardVariants: Variants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.05,
                duration: 0.8,
            },
        },
    };
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.3}}
            variants={cardVariants}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;

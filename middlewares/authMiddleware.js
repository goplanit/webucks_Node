import { verifyToken, getUserByIdService } from '../services/userService';
import { ERRORS } from '../utils/error';

export const authMiddleware = () => {
  return async (req, res, next) => {
    const { user } = req.cookies;
    if (user) {
      try {
        const userId = await verifyToken(user);
        if (userId) {
          const isUser = await getUserByIdService(userId.id);
          if (isUser) {
            req.user = user;
          }
        }
      } catch {
        res.status(401).json({ response: false, error: ERRORS.INVALID_TOKEN });
      }
    }
    next();
  };
};

const supabase = require('../services/supabaseClient');

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split('Bearer ')[1];
  if (!token) return res.status(401).send('Unauthorized');

  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return res.status(401).send('Unauthorized');

  req.user = user;
  next();
};

module.exports = authMiddleware;
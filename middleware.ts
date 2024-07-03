import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'; // createRouteMatcher will allow specific routes to make public or private

const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)', // (.*) match all the meetings with any id
  '/previous',
  '/recordings',
  '/personal-room',
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoute(req)) auth().protect(); // if the req is in protected route then protect it using auth
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

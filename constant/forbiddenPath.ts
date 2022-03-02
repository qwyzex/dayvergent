export type userForbiddenPath = "/login" | "/register" | "/";
export type anonymousForbiddenPath = "/account" | "/dashboard" | "/";

export const userForbiddenPathRegex: RegExp = /^\/login|^\/$/g;
export const anonymousForbiddenPathRegex: RegExp = /^\/account|^\/dashboard|^\/settings/g;

const forbiddenPath = {
    user: userForbiddenPathRegex,
    anon: anonymousForbiddenPathRegex,
};

export default forbiddenPath;

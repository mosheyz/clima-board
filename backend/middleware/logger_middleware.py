from fastapi import Request


async def logger(req: Request, call_next):
    print(f"{req.method}/ {req.url} called")
    return await call_next(req)

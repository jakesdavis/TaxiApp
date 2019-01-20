export class AppRouter {

    public static initializeRoutes(app): void {
        app.get("/api/v1/", (_req, res) => {
            res.status(200).send({
                success: true,
                message: "API is ready for use.",
            })
        });
        return;
    }
}
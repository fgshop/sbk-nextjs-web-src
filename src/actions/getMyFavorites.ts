import prisma from "../../libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function getMyFavorites() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	try {
		const favourites = await prisma.favourite.findMany({
			where: { userId: currentUser.id },
			orderBy: {
				id: "desc",
			},
			include: {
				course: {
					include: {
						user: true,
						enrolments: {
							select: {
								id: true,
							},
						},
					},
				},
			},
		});

		// console.log(courses);

		return { favourites };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}

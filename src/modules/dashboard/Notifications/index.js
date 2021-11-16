import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import NotificationBar from "../../../components/NotificationBar";
import Sample from "./sample.json";

const Notifications = () => {
  
  return (
    <>
      <Layout
        sider={<SideMenu />}
        main={
          <>
            <div>
              <h1 className="text-2xl font-semibold text-center">
                Notifications
              </h1>

              {Sample.map((notification) => {
                return (
                  <NotificationBar
                    key={notification.notifId}
                    userName={notification.username}
                    reqType={notification.reqType}
                    notifId={notification.notifId}
                    userId={notification.userId}
                    userImg={notification.userImg}
					postId={notification.postId}
                  />
                );
              })}
            </div>
          </>
        }
      />
    </>
  );
};

export default Notifications;

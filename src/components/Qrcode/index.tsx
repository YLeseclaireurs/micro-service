import {QRCode} from "antd";
import React from "react";
import "./index.less"

export default function Qrcode(props:any) {
    const url = props.url

    return (
        <div className="qr_code_pc_outer">
            <div className="qr_code_pc_inner">
                <div className="qr_code_pc">
                    <QRCode size={110} bordered={false} value={url} style={{marginLeft: 13}}/>
                    <div style={{paddingBottom: 5}}>
                        <div>微信扫一扫</div>
                        <div>随时阅读更容易</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
